"use client";

import NeonButton from "../ui/NeonButton";

type ContactSubmitButtonProps = {
  loading: boolean;
};

export default function ContactSubmitButton({
  loading,
}: ContactSubmitButtonProps) {
  return (
    <NeonButton type="submit" loading={loading}>
      <span className="flex items-center justify-center gap-4">
        {loading ? "送信中..." : "送信する"}
        {!loading && <span>→</span>}
      </span>
    </NeonButton>
  );
}