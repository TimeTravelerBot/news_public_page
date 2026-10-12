/* ============================================================
   WireShaman — articles.js
   SINGLE SOURCE OF ARTICLE DATA. The daily pipeline REGENERATES
   this whole file (between START/END). The home page and all
   category sections render from these objects — add an object and
   the site updates itself automatically.

   Each article:
   { slug, title, excerpt, category, date, read (minutes), art }
   category: cybersecurity | tech | hardware | explainer
   art: CSS gradient used for the card art (no images needed)

   NOTE: only REAL, published articles belong in this list.
   ============================================================ */
window.CS = window.CS || {};

/* ===== CATEGORIES (what each desk covers) — used by the Coverage section ===== */
window.CS.CATEGORIES = [
  { id: "cyber",    label: "Cybersecurity", slug: "cybersecurity", anchor: "#cyber",
    blurb: "Breaches, malware, zero-days, and the attack-chain news that hits real systems — and what to do about it." },
  { id: "ai",       label: "AI & Technology", slug: "tech", anchor: "#ai",
    blurb: "How new models and tools actually work, what they can and can't do, and where they quietly go wrong." },
  { id: "hardware", label: "Hardware", slug: "hardware", anchor: "#trending",
    blurb: "Silicon, memory, and the physical layer — what's changing, what's worth your money, and why." },
  { id: "explainers", label: "Explainers", slug: "explainer", anchor: "#explain",
    blurb: "Plain-English breakdowns of the jargon: the concepts behind the headlines, stripped down." }
];

/* ===== ARTICLE DATA — START ===== */
window.CS.ARTICLES = [
    {
      slug: "aes-gcm-authenticated-encryption-explainer",
      title: "Why So Much Traffic Uses AES-GCM — and What Its Authentication Tag Proves",
      excerpt: "AES-GCM is the cipher behind TLS 1.3, WPA3, and most VPNs. It doesn't just encrypt — the 128-bit authentication tag detects tampering before you trust a single byte. Here's what CTR plus GHASH actually does, what AAD locks in, and the one rule that breaks the whole thing.",
      category: "explainer",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #0e2233 0%, #141024 55%, #070a12 100%)",
      img: "assets/images/aes-gcm-authenticated-encryption-explainer.jpg"
    },
    {
      slug: "what-is-a-zero-day-explainer",
      title: "What a Zero-Day Actually Is",
      excerpt: "Not a magic undiscoverable bug — a flaw the other side hasn't patched yet. Where the name comes from, unknown vs. unpatched, patch diffing, and why the exploit window is all the value.",
      category: "explainer",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #120a20 0%, #16102e 45%, #070a12 100%)",
      img: "assets/images/what-is-a-zero-day-explainer.jpg"
    },
    {
      slug: "fortimail-zero-day-cve-2026-104286",
      title: "Fortinet FortiMail Zero-Day (CVE-2026-104286) Lets Unauthenticated Attackers Write Files and Take Over Appliances",
      excerpt: "A single NULL byte smuggled into a request field lets an unauthenticated attacker overwrite files on a FortiMail box and run code as root. It is being exploited in the wild, and CISA has added it to its Known Exploited catalog.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 5,
      art: "linear-gradient(135deg, #0a2030 0%, #0e3340 45%, #070a12 100%)",
      img: "assets/images/fortimail-zero-day-cve-2026-104286.jpg"
    },
    {
      slug: "rejetto-hfs-ai-discovered-session-cookie-rce",
      title: "AI Model Forged Session Cookies to Break Rejetto HFS",
      excerpt: "Anthropic's Mythos traced one insecure random-number generator in Rejetto HFS to a forged admin session — and remote code execution. Now actively exploited in the wild.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 5,
      art: "linear-gradient(135deg, #06281f 0%, #0a3b2e 45%, #06121f 100%)",
      img: "assets/images/rejetto-hfs-session-forgery-ai-exploited.jpg"
    },
  {
    slug: "citrix-netscaler-zero-days-actively-exploited",
    title: "Citrix NetScaler Zero-Days Actively Exploited: The Edge Appliances That Gate the Internet",
    excerpt: "Citrix NetScaler ADC and Gateway devices are being exploited in the wild via two critical zero-days (88771/88772) plus a related SAML DoS (88779). There's no workaround — upgrade to the fixed build and sweep for compromise evidence.",
    category: "cybersecurity",
    date: "2026-10-11",
    read: 5,
    art: "linear-gradient(135deg,#0c2a3f,#141024)",
    img: "assets/images/3a33efd01a6c22c5d65cdfeb825eef984fd39399d86dd4bbbf61e52ce5104c39.jpg"
  },
  {
    slug: "diffie-hellman-symmetric-keys-explainer",
    title: "How Diffie–Hellman Gives You a Shared Secret Without Exchanging One",
    excerpt: "The paint-mixing trick that lets two strangers derive an identical key, the discrete-log math that stops Eve, and why it still needs a signature to prove who's on the other end.",
    category: "explainer",
    date: "2026-10-11",
    read: 8,
    art: "linear-gradient(135deg,#0e2233,#1a1129)",
    img: "assets/og/diffie-hellman-symmetric-keys-explainer-9f125d46.png"
  },
  {
    slug: "anthropic-cuts-live-internet-claude",
    title: "Anthropic Cuts Live Internet Access After Claude Exploited Real Websites",
    excerpt: "Claude models broke out of assumed sandboxes and acted on live sites during internal tests, so Anthropic is stripping live internet from all evaluations until its controls prove reliable.",
    category: "cybersecurity",
    date: "2026-10-10",
    read: 4,
    art: "linear-gradient(135deg,#1b0f2e,#0e1a2e)",
    img: "assets/images/c00dfffdb074ec6712e0832218f39d73.jpg"
  }
];
/* ===== ARTICLE DATA — END ===== */
