import { NextResponse } from "next/server";

const categoryMap = {
  auto: { code: "AUTO", label: "自動車" },
  seafood: { code: "SEA", label: "海産物" },
  farm: { code: "FARM", label: "農産物" },
  matcha: { code: "MATCHA", label: "抹茶" },
  luxury: { code: "LUXURY", label: "時計・宝飾" },
  jewelry: { code: "OTHER", label: "その他" },
  global: { code: "GLOBAL", label: "輸出入支援" },
} as const;

type CategoryKey = keyof typeof categoryMap;

type ContactBody = {
  category?: CategoryKey;
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  turnstileToken?: string;
};

type ResendEmailPayload = {
  from: string;
  to: string | string[];
  reply_to?: string;
  subject: string;
  text: string;
};

async function sendEmailWithResend(apiKey: string, payload: ResendEmailPayload) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error: ${response.status} ${errorText}`);
  }
}

export async function POST(req: Request) {
  try {
    let body: ContactBody;

    try {
      body = (await req.json()) as ContactBody;
    } catch {
      return NextResponse.json(
        { ok: false, message: "リクエスト形式が不正です" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const mailFrom = process.env.MAIL_FROM || "contact@trade-on-company.com";
    const contactTo = process.env.CONTACT_TO;
    const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

    if (!resendApiKey || !contactTo || !turnstileSecretKey) {
      console.error("CONTACT ENV ERROR: required environment variable is missing");
      return NextResponse.json(
        { ok: false, message: "送信設定に不備があります" },
        { status: 500 }
      );
    }

    // メール形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 必須チェック
    if (!body.name?.trim()) {
      return NextResponse.json(
        { ok: false, message: "お名前は必須です" },
        { status: 400 }
      );
    }

    if (!body.email?.trim() || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { ok: false, message: "メールアドレスが不正です" },
        { status: 400 }
      );
    }

    if (!body.message?.trim()) {
      return NextResponse.json(
        { ok: false, message: "お問い合わせ内容は必須です" },
        { status: 400 }
      );
    }

    // 文字数制限
    if (
      (body.company?.length || 0) > 100 ||
      (body.name?.length || 0) > 50 ||
      (body.email?.length || 0) > 100 ||
      (body.phone?.length || 0) > 30 ||
      (body.message?.length || 0) > 3000
    ) {
      return NextResponse.json(
        { ok: false, message: "入力内容が長すぎます" },
        { status: 400 }
      );
    }

    // Turnstile認証確認
    if (!body.turnstileToken) {
      return NextResponse.json(
        { ok: false, message: "認証に失敗しました" },
        { status: 400 }
      );
    }

    // Turnstile検証
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: turnstileSecretKey,
          response: body.turnstileToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { ok: false, message: "認証に失敗しました" },
        { status: 400 }
      );
    }

    // メールヘッダ対策
    const safeEmail = body.email.replace(/[\r\n]/g, "");

    const categoryKey: CategoryKey =
      body.category && body.category in categoryMap
        ? body.category
        : "auto";

    const selected = categoryMap[categoryKey];

    const adminSubject = `【${selected.code}（${selected.label}）】お問い合わせがありました`;

    const adminText = `
合同会社TRADE-ON

お問い合わせがありました。

■カテゴリ
${selected.label}（${selected.code}）

■会社名
${body.company || "未入力"}

■お名前
${body.name || "未入力"}

■メールアドレス
${safeEmail || "未入力"}

■電話番号
${body.phone || "未入力"}

■お問い合わせ内容
${body.message || "未入力"}
`;

    const userSubject = "【TRADE-ON】お問い合わせありがとうございます";

    const userText = `
${body.name || ""} 様

この度は、合同会社TRADE-ONへ
お問い合わせいただき誠にありがとうございます。

以下の内容でお問い合わせを受け付けいたしました。

--------------------------------

■カテゴリ
${selected.label}（${selected.code}）

■お問い合わせ内容
${body.message || "未入力"}

--------------------------------

内容を確認後、
担当者よりご連絡いたします。

今しばらくお待ちくださいませ。

--------------------------------
合同会社TRADE-ON
`;

    // 管理者通知
    await sendEmailWithResend(resendApiKey, {
      from: mailFrom,
      to: contactTo,
      reply_to: safeEmail,
      subject: adminSubject,
      text: adminText,
    });

    // 自動返信
    await sendEmailWithResend(resendApiKey, {
      from: mailFrom,
      to: safeEmail,
      subject: userSubject,
      text: userText,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "送信に失敗しました",
      },
      {
        status: 500,
      }
    );
  }
}
