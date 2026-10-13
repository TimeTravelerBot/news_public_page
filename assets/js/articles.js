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
  { id: "cyber",    label: "Cybersecurity", slug: "cybersecurity", href: "categories/cybersecurity.html",
    blurb: "Breaches, malware, zero-days, and the attack-chain news that hits real systems — and what to do about it." },
  { id: "ai",       label: "AI & Technology", slug: "tech", href: "categories/tech.html",
    blurb: "How new models and tools actually work, what they can and can't do, and where they quietly go wrong." },
  { id: "hardware", label: "Hardware", slug: "hardware", href: "categories/hardware.html",
    blurb: "Silicon, memory, and the physical layer — what's changing, what's worth your money, and why." },
  { id: "explainers", label: "Explainers", slug: "explainer", href: "categories/explainer.html",
    blurb: "Plain-English breakdowns of the jargon: the concepts behind the headlines, stripped down." }
];

/* ===== ARTICLE DATA — START ===== */
window.CS.ARTICLES = [
  {
    "slug": "anthropic-cyber-mission-oss-scanner-2026",
    "title": "Anthropic unveils the 'Cyber Mission' and a free AI scanner for open-source software",
    "excerpt": "Anthropic launched a new long-term 'Cyber Mission' built around a free OSS Scanner that runs its strongest models over open-source projects, a Critical Infrastructure Defense Program backed by major security firms, and an expanded Cyber Verification Program that opens its most capable models to more defenders.",
    "category": "tech",
    "date": "2026-10-08",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/anthropic-cyber-mission-oss-scanner-2026.jpg"
  },
  {
    "slug": "killsec-ransomware-teen-takedown-2026",
    "title": "Police Shutter KillSec Ransomware and Arrest a 16-Year-Old Suspected Operator",
    "excerpt": "A coordinated European operation seized the KillSec ransomware infrastructure and identified a teenage suspect alleged to have run the group's attack campaign.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/killsec-ransomware-teen-takedown-2026.jpg"
  },
  {
    "slug": "midnight-mimosa-android-firmware-malware",
    "title": "“Midnight Mimosa”: Cheap Android Phones Ship With Malware You Can’t Uninstall",
    "excerpt": "A new preinstalled firmware-root malware named Midnight Mimosa was found on low-cost MediaTek Android phones sold across more than 150 countries, enabling ad fraud and turning victims into residential proxies.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/midnight-mimosa-android-firmware-malware.jpg"
  },
  {
    "slug": "shinyhunters-canadian-exec-arrested",
    "title": "FBI Arrests Canadian Ransomware Negotiator in ShinyHunters Crackdown",
    "excerpt": "A 54-year-old Canadian cybersecurity executive who helps victims negotiate ransomware extortion was arrested in Pennsylvania and moved to the Eastern District of Texas, the center of the FBI's ShinyHunters investigation.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 7,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/shinyhunters-canadian-exec-arrested.jpg"
  },
  {
    "slug": "pixel-10-pwn2own-android-2026",
    "title": "Pwn2Own Ireland 2026: Researchers Remotely Crack the Pixel 10 Three Times",
    "excerpt": "Pwn2Own Ireland 2026 ended with a record payout, and the Google Pixel 10 drew the largest single share after three teams each proved remote, unpatched exploits.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/pixel-10-pwn2own-android-2026.jpg"
  },
  {
    "slug": "mediatek-october-2026-security-bulletin",
    "title": "MediaTek's October 2026 bulletin silences 31 flaws, led by two critical modem bugs",
    "excerpt": "MediaTek's October 2026 security bulletin addresses 31 chipset vulnerabilities, including two critical out-of-bounds write flaws in its modem stack that can be triggered from a rogue base station with no user interaction.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 4,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/mediatek-october-2026-security-bulletin.jpg"
  },
  {
    "slug": "microsoft-maia-300-ai-chip-2026",
    "title": "Microsoft Debuts Maia 300 Chip and Pledges Multi-Gigawatt Inference Fleet",
    "excerpt": "Microsoft's third-generation Maia 300 AI accelerator, unveiled on 12 October 2026, is aimed squarely at AI inference and is planned for multi-gigawatt Azure deployments beginning in 2027.",
    "category": "tech",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/microsoft-maia-300-ai-chip.jpg"
  },
  {
    "slug": "what-is-oauth-explainer",
    "title": "What Is OAuth? Authorization, Tokens and PKCE Explained",
    "excerpt": "OAuth lets an application receive limited access to another service without receiving the user's password. Here is how roles, tokens, scopes and PKCE fit together.",
    "category": "explainer",
    "date": "2026-10-13",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/what-is-oauth-explainer.jpg"
  },
  {
    "slug": "amd-ryzen-ai-400-gorgon-laptop-2026",
    "title": "AMD's 192GB Ryzen AI Halo Pushes Local AI Beyond Laptop Memory Limits",
    "excerpt": "AMD's new Ryzen AI Halo developer platform combines a Ryzen AI Max+ PRO 495 with up to 192GB of unified memory for large local AI workloads.",
    "category": "hardware",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/amd-ryzen-ai-400-gorgon-laptop-2026.jpg"
  },
    {
      slug: "oneplus-16-china-launch",
      title: "OnePlus 16 launches in China with a 3,840Hz \"Oriental\" LTPO display, 200MP camera, and 9,000mAh battery",
      excerpt: "OnePlus announced the OnePlus 16 in China on October 12, 2026, headlined by its 4th Gen Oriental display (3,840Hz PWM), Snapdragon 8 Elite Extreme Gen 6, and 9,000mAh battery, with a global event reported for November 5.",
      category: "hardware",
      date: "2026-10-13",
      read: 8,
      art: "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
      img: "assets/images/oneplus-16-china-launch.jpg"
    },
    {
      slug: "citrix-netscaler-zero-day-alert",
      title: "CISA Warns of Active Zero-Day Exploits in Citrix NetScaler — New CVE Added",
      excerpt: "CISA expanded its Citrix NetScaler alert on October 9, adding CVE-2026-107406 and clarifying the relationship between two more CVEs. Patch the full set and review your compromise-response posture.",
      category: "cybersecurity",
      date: "2026-10-13",
      read: 6,
      art: "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
      img: "assets/images/citrix-netscaler-zero-day-alert.jpg"
    },
    {
      slug: "what-is-tls-handshake-explainer",
      title: "What Is a TLS Handshake? How HTTPS Proves It\u2019s Safe to Talk",
      excerpt: "A plain-English walkthrough of the TLS handshake \u2014 ClientHello to Finished, and what RFC 8446 (TLS 1.3) actually changed in 2018. Why it matters, step by step, no jargon.",
      category: "explainer",
      date: "2026-10-13",
      read: 6,
      art: "linear-gradient(135deg, #0a2a3a 0%, #1a3a5a 100%)",
      img: "assets/images/what-is-tls-handshake-explainer.jpg"
    },
    {
      slug: "nvidia-rtx-spark-laptops-surface-laptop-ultra",
      title: "Nvidia RTX Spark Laptops Arrive October 16: Surface Laptop Ultra, Full Lineup with Specs and Pricing",
      excerpt: "Nvidia's RTX Spark superchip goes on sale across six brands starting October 16, 2026. Microsoft's Surface Laptop Ultra starts at $2,599, the Surface RTX Spark Dev Box at $5,999.99. Here's every model, price, and what the unified-memory Arm chip actually changes.",
      category: "hardware",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #090b18 0%, #1a2a52 45%, #00d9ff 100%)",
      img: "assets/images/nvidia-rtx-spark-laptops-surface-laptop-ultra.jpg"
    },
    {
      slug: "fips-140-2-sunset-explainer",
      title: "FIPS 140-2 Sunsetting Sept 21 2026: What \"Historical\" Status Means for Your Stack",
      excerpt: "On September 21, 2026, every remaining active FIPS 140-2 certificate moves to the NIST Historical list. A procurement change, not a vulnerability — and a launch-ramp into FIPS 140-3 and post-quantum crypto. Here's what to verify in your security stack.",
      category: "explainer",
      date: "2026-10-12",
      read: 6,
      art: "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
      img: "assets/images/fips-140-2-sunset-explainer.jpg"
    },
    {
      slug: "cisco-catalyst-sd-wan-manager-auth-bypass-cve-2026-76504",
      title: "Cisco Catalyst SD-WAN Manager Auth Bypass (CVE-2026-76504) Explained",
      excerpt: "A critical, unauthenticated authentication bypass in the SD-WAN Manager API is under active attack. One crafted request, full admin access, no workaround — and the vManage is the crown jewel of the edge. Here's what's exposed, what's patched, and what to do now.",
      category: "cybersecurity",
      date: "2026-10-12",
      read: 7,
      art: "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
      img: "assets/images/cisco-catalyst-sd-wan-manager-auth-bypass-cve-2026-76504.jpg"
    },
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
