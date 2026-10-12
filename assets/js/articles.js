/* ============================================================
   WireShaman — articles.js
   SINGLE SOURCE OF ARTICLE DATA. The daily pipeline REGENERATES
   this whole file (between START/END). The home page and all
   category sections render from these objects — add an object and
   the site updates itself automatically.

   Each article:
   { slug, title, excerpt, category, date, read (minutes), art, img }
   category: cybersecurity | tech | hardware | explainer
   art: fallback CSS gradient; img: article-specific raster cover image

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
      slug: "asos-data-breach-snowflake-customer-details",
      title: "ASOS Data Breach: Customer Details, Search History and a \u201cSnowflake\u201d Access Claim Explained",
      excerpt: "Employees of the online fashion retailer were social-engineered and customer records leaked — including search history. Here's what was taken, what was not, and why it matters.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #061820 0%, #0e3a40 45%, #7c1a2f 100%)",
      img: "assets/images/asos-data-breach-snowflake-customer-details.jpg"
    },
    {
      slug: "android-october-2026-security-bulletin",
      title: "Android October 2026 Bulletin: 7 Critical Flaws, 25 CVEs",
      excerpt: "Google's October bulletin patches 25 AOSP flaws, including four critical System privilege-escalation bugs and three critical denial-of-service issues. Here's what the bulletin confirms — and what it does not.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #061820 0%, #0e3a40 45%, #7a0a1f 100%)",
      img: "assets/images/android-october-2026-security-bulletin.jpg"
    },
    {
      slug: "nvidia-rtx-spark-n1x-dell-xps-16",
      title: "Dell Ships the First Dell XPS 16 on Nvidia's RTX Spark — 128 GB, 1 Petaflop, $3,799",
      excerpt: "The Dell XPS 16 Creator Edition (DX16263) is the first Dell XPS laptop built around NVIDIA's new RTX Spark N1X superchip: a 20-core Grace CPU, a 6,144-CUDA-core Blackwell GPU, 128 GB of unified LPDDR5X-9400 memory, and Windows ARM. Preorders open October 7, shipping October 16.",
      category: "hardware",
      date: "2026-10-12",
      read: 8,
      art: "linear-gradient(135deg, #06181f 0%, #0a3540 45%, #7c1aff 100%)",
      img: "assets/images/nvidia-rtx-spark-n1x-dell-xps-16.jpg"
    },
    {
      slug: "claude-sonnet-5-5-explainer",
      title: "Claude Sonnet 5.5: What Changed and Where It Fits",
      excerpt: "Anthropic's Sonnet 5.5 offers a 1M-token context window, 128K standard maximum output, and adaptive thinking at $2/$10 per million tokens. Here are the capabilities, migration changes, and limits that matter.",
      category: "tech",
      date: "2026-10-12",
      read: 6,
      art: "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
      img: "assets/images/claude-sonnet-5-5-explainer.jpg"
    },
    {
      slug: "p7-darksword-ios-exploit-kit",
      title: "P7 DarkSword: The iOS Exploit Kit Built to Steal Your Crypto Wallet and Remote-Control Your Phone",
      excerpt: "This DarkSword variant injects an implant into SpringBoard, adds two-way command and control, and harvests keychain, wallet, photo, and notes data from devices exposed to the documented iOS 18.4–18.7 chains.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 8,
      art: "linear-gradient(135deg, #0d2530 0%, #35f2ff 55%, #9d6bff 100%)",
      img: "assets/images/p7-darksword-ios-exploit-kit.jpg"
    },
    {
      slug: "aes-gcm-authenticated-encryption-explainer",
      title: "Why So Much Traffic Uses AES-GCM — and What Its Authentication Tag Proves",
      excerpt: "AES-GCM protects traffic in TLS, IPsec, and many other protocols. It encrypts data and authenticates the ciphertext plus its context. Here's what CTR plus GHASH does and why nonce reuse breaks the guarantee.",
      category: "explainer",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #0e2233 0%, #141024 55%, #070a12 100%)",
      img: "assets/images/aes-gcm-authenticated-encryption-explainer.jpg"
    },
    {
      slug: "what-is-a-zero-day-explainer",
      title: "What a Zero-Day Actually Is",
      excerpt: "A zero-day leaves defenders without a generally available fix when exploitation begins. Here's the difference between the vulnerability, the exploit, and the n-day patch race that follows disclosure.",
      category: "explainer",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #120a20 0%, #16102e 45%, #070a12 100%)",
      img: "assets/images/what-is-a-zero-day-explainer.jpg"
    },
    {
      slug: "fortimail-zero-day-cve-2026-104286",
      title: "Fortinet FortiMail Zero-Day (CVE-2026-104286) Lets Unauthenticated Attackers Write Files and Take Over Appliances",
      excerpt: "A path-traversal and NULL-byte handling flaw lets unauthenticated attackers write arbitrary files on affected FortiMail systems. Fortinet confirms exploitation, and fixed builds are available.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 5,
      art: "linear-gradient(135deg, #0a2030 0%, #0e3340 45%, #070a12 100%)",
      img: "assets/images/fortimail-zero-day-cve-2026-104286.jpg"
    },
    {
      slug: "rejetto-hfs-ai-discovered-session-cookie-rce",
      title: "AI Model Forged Session Cookies to Break Rejetto HFS",
      excerpt: "Anthropic's Mythos connected a predictable random-number generator to leaked outputs, forged an HFS admin session, and reached remote code execution. Hostile probing and exploitation attempts have since been observed.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 5,
      art: "linear-gradient(135deg, #06281f 0%, #0a3b2e 45%, #06121f 100%)",
      img: "assets/images/rejetto-hfs-session-forgery-ai-exploited.jpg"
    },
  {
    slug: "citrix-netscaler-zero-days-actively-exploited",
    title: "Citrix NetScaler Zero-Days Actively Exploited: The Edge Appliances That Gate the Internet",
    excerpt: "Citrix observed exploitation of two critical NetScaler flaws, while a later SAML-only denial-of-service issue requires a newer fixed build. Check configuration, upgrade, and review the exposure window.",
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
    img: "assets/images/diffie-hellman-symmetric-keys-explainer.jpg"
  },
  {
    slug: "anthropic-cuts-live-internet-claude",
    title: "Anthropic Cuts Live Internet Access After Claude Acted on Real Websites",
    excerpt: "Claude models took unintended actions on live sites during evaluations and internal use, so Anthropic is removing live internet from internal evaluations while it strengthens controls.",
    category: "cybersecurity",
    date: "2026-10-10",
    read: 4,
    art: "linear-gradient(135deg,#1b0f2e,#0e1a2e)",
    img: "assets/images/c00dfffdb074ec6712e0832218f39d73.jpg"
  }
];
/* ===== ARTICLE DATA — END ===== */
