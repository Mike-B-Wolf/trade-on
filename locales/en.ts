import type { Dictionary } from "./types";

export const en = {
  meta: {
    title: "TRADE-ON LLC | International Trade & Global Sourcing",
    description:
      "TRADE-ON LLC is a trusted trade partner connecting Japan and global markets through sourcing, import, export, and quality products.",
  },
  header: {
    nav: [
      { href: "#service", en: "SERVICE", label: "Services" },
      { href: "#products", en: "PRODUCTS", label: "Products" },
      { href: "#strength", en: "STRENGTH", label: "Our Strengths" },
      { href: "#flow", en: "FLOW", label: "Process" },
    ],
    language: "LANGUAGE",
    contactButton: "Contact →",
  },
  hero: {
    titleLine1: "Authentic Quality",
    titleLine2: "for Global Markets.",
    body: [
      "TRADE-ON LLC connects Japan with global markets through trusted sourcing, import, export, and international trade support. We bring high-quality Japanese products to overseas markets while introducing valuable global products to Japan.",
      "With a focus on trust, quality, and careful coordination, we help clients conduct smooth and reliable cross-border transactions.",
    ],
    productsCta: "View Products →",
    contactCta: "Discuss a Trade →",
    contactHref: "/en/contact",
  },
  stats: [
    { label: "Countries Served", value: "10", suffix: "+ countries" },
    { label: "Annual Transactions", value: "100", suffix: "+ cases" },
    { label: "Client Satisfaction", value: "98%", suffix: "+" },
    { label: "Product Range", value: "300", suffix: "+ types" },
  ],
  products: {
    badge: "PRODUCTS",
    titleLine1: "A diverse range",
    titleLine2: "of products.",
    description:
      "We support domestic and international trade across automobiles, seafood, matcha, agricultural products, watches, branded goods, jewelry, and more. We also provide practical consulting and coordination for import and export operations.",
    footerLabel: "GLOBAL SOURCING / EXPORT / IMPORT",
    cards: [
      { title: "Automobiles", en: "Vehicles" },
      { title: "Seafood", en: "Marine Products" },
      { title: "Agricultural Products", en: "Fresh Produce" },
      { title: "Matcha", en: "Matcha" },
      { title: "Watches & Jewelry", en: "Luxury Goods" },
      { title: "Custom Sourcing", en: "Flexible Sourcing" },
    ],
    other: {
      titleLines: ["We also handle", "other product categories"],
      bodyLines: [
        "Beyond the products listed here, we work with a wide range of goods.",
        "Please contact us first, and we will respond flexibly to your needs.",
      ],
      note: "* Product categories shown are examples. Please contact us for details.",
    },
  },
  flow: {
    badge: "FLOW",
    title: "How It Works",
    steps: [
      "Inquiry",
      "Needs Assessment",
      "Proposal & Estimate",
      "Start Trading",
      "After-Sales Support",
    ],
  },
  service: {
    items: [
      {
        tag: "SCENES",
        title: "Bringing the Best of Japan to Global Markets.",
        lines: [
          "We deliver not only product quality,",
          "but also the value and story behind each item.",
          "",
          "TRADE-ON aims to be",
          "a trusted partner in international trade.",
        ],
      },
      {
        tag: "GLOBAL",
        title: "Connecting Japan and the World Through Reliable Trade.",
        lines: [
          "From sourcing and quality checks to import/export procedures and negotiations,",
          "we provide end-to-end support across every stage of the transaction.",
          "",
          "With speed, precision, and care,",
          "we help clients trade across borders with confidence.",
        ],
      },
    ],
  },
  contactCta: {
    badge: "CONTACT",
    title: "Contact",
    bodyLines: [
      "If you have questions or would like to discuss our products or services, please feel free to reach out.",
      "We will propose the best approach based on your needs.",
    ],
    button: "Send an Inquiry →",
    href: "/en/contact",
  },
  groupLinks: {
    badge: "OFFICIAL LINKS",
    title: "Our Brands & Official Channels",
    description:
      "Follow our brands on social media for the latest updates and activities.",
    lineLabel: "Official LINE Account",
    items: [
      { name: "TRADE-ON LLC", description: "Trading and brand operations" },
      { name: "Car Match Aomori Hirosaki", description: "Vehicle sales and purchasing" },
      { name: "HIGH END", description: "Luxury watches and jewelry" },
    ],
  },
  footer: {
    taglineLines: [
      "Bringing quality Japanese products to the world,",
      "and supporting value-driven businesses.",
    ],
    menuTitle: "MENU",
    contactTitle: "CONTACT",
    menu: [
      { href: "#service", label: "Services" },
      { href: "#products", label: "Products" },
      { href: "#flow", label: "Process" },
      { href: "/en/contact", label: "Contact" },
    ],
    address: "3-1-24 Joto Chuo, Hirosaki, Aomori, Japan",
    copyright: "© 2026 TRADE-ON LLC. All rights reserved.",
  },
  contactPage: {
    meta: {
      title: "Contact | TRADE-ON LLC",
      description:
        "Contact TRADE-ON LLC regarding sourcing, import/export, products, and international trade opportunities.",
    },
    backToTop: "BACK TO TOP",
    language: "LANGUAGE",
    hero: {
      badge: "CONTACT",
      title: "Contact",
      bodyLines: [
        "We welcome inquiries regarding products, sourcing, import/export, and international trade.",
        "A member of our team will review your inquiry and contact you shortly.",
      ],
    },
    cards: [
      {
        en: "GLOBAL",
        title: "Domestic & International Trade",
        text: "Consultation on sourcing, import/export, and international trade.",
      },
      {
        en: "QUALITY",
        title: "Quality & Product Checks",
        text: "Support for automobiles, food products, consumer goods, and more.",
      },
      {
        en: "SUPPORT",
        title: "Dedicated Support",
        text: "A representative will follow up after reviewing your inquiry",
      },
    ],
    formIntro: {
      badge: "FORM",
      title: "Contact Form",
      description:
        "Your inquiry will be forwarded to the appropriate team based on its content.",
    },
    form: {
      categoryBadge: "CATEGORY",
      categoryTitle: "Inquiry Category",
      categories: [
        { key: "auto", label: "Vehicles", code: "AUTO" },
        { key: "seafood", label: "Seafood", code: "SEA" },
        { key: "farm", label: "Agricultural Products", code: "FARM" },
        { key: "matcha", label: "Matcha", code: "MATCHA" },
        { key: "luxury", label: "Watches & Jewelry", code: "LUXURY" },
        { key: "global", label: "Import / Export", code: "GLOBAL" },
        { key: "jewelry", label: "Other", code: "OTHER" },
      ],
      fields: {
        company: { label: "Company Name", placeholder: "Example: TRADE-ON Inc." },
        name: { label: "Name", placeholder: "Taro Yamada" },
        email: { label: "Email", placeholder: "Example: info@tradeon.co.jp" },
        phone: { label: "Phone", placeholder: "090-1234-5678" },
        message: {
          label: "Message",
          placeholder: "Please enter your inquiry...",
        },
      },
      errors: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
        turnstileRequired: "Please complete the verification",
        submitFailed: "Failed to send your message",
        submitFailedRetry: "Failed to send your message. Please try again later.",
      },
      noticeLines: [
        "After submitting your inquiry, you will receive an automated confirmation email from TRADE-ON LLC.",
        "A member of our team will review your inquiry and contact you within two business days.",
      ],
      privacy:
        "The information you provide will only be used to respond to your inquiry.",
      submit: "Send",
      submitting: "Sending...",
      loadingTitle: "Sending...",
      loadingText: "Your inquiry is being sent",
      successBadge: "MESSAGE SENT",
      successTitle: "Sent Successfully",
      successBodyLines: [
        "Thank you for contacting us.",
        "A member of our team will review your inquiry and contact you shortly.",
      ],
      successCompany: "TRADE-ON",
      successStatus: "Received",
    },
  },
} satisfies Dictionary;
