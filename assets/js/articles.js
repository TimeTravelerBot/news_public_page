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
    "slug": "hypervisor-virtual-machine-isolation-explained",
    "title": "How Hypervisors Virtualize Hardware and Keep Virtual Machines Isolated",
    "excerpt": "A clear, technical plain-language explanation of what hypervisors actually do, the difference between Type 1 and Type 2 architectures, the security model, and why hardware virtualization support matters.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/132636c9e8ee7b821417d5a298cb9b30747e4b33fc54abdccc31c45b7f6e97ff.jpg"
  },
  {
    "slug": "surface-laptop-ultra-nvidia-rtx-spark",
    "title": "Microsoft's Surface Laptop Ultra and RTX Spark Dev Box arrive — Windows PCs built for local AI agents",
    "excerpt": "At a San Francisco event, Microsoft and Nvidia opened pre-orders for the Surface Laptop Ultra and a compact RTX Spark Dev Box, running a new superchip with 1 petaflop of AI compute and up to 128GB of unified memory.",
    "category": "hardware",
    "date": "2026-10-14",
    "read": 5,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/49b79221471f56050b5a4e9ee052fe2f36d1943f0b52284e854f46f922f1bb62.jpg"
  },
  {
    "slug": "android-security-bulletin-october-2026",
    "title": "Android's October 2026 update patches 25 vulnerabilities, including seven critical flaws",
    "excerpt": "Google's October 2026 Android security update resolves 25 vulnerabilities, including seven critical bugs.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/c0004049887f75e15ed0a5fc0c7796ccb495931fba1d37ff0c77f403b7f0c70f.jpg"
  },
  {
    "slug": "liquid-ai-lfm2-5-24b-a2b-open-weight-on-device",
    "title": "Liquid AI's LFM2.5-24B-A2B: an open-weight 24B reasoning model built for on-device agents",
    "excerpt": "Liquid AI released LFM2.5-24B-A2B on October 13, 2026, a 24B-parameter open-weight model with just 2B active parameters designed to run local agents on laptops and phones. We cover its architecture, benchmark results, and what the design tradeoffs mean for you.",
    "category": "tech",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/9e35303e0992f75c0492307f43116a2016fc6333d55c706c76f8c9174141d8d2.jpg"
  },
  {
    "slug": "branch-prediction-speculative-execution-explained",
    "title": "How branch prediction and speculative execution work — the trick that makes fast CPUs fast (and leaks your secrets)",
    "excerpt": "Speculative execution is one of computer science's most important performance tricks — and the reason Spectre-class hardware leaks are possible.",
    "category": "explainer",
    "date": "2026-09-01",
    "read": 9,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/25db082152eab5d44b2ad1ad5ce88842bb11e1f919a4e8309efc1eaf89eebf37.jpg"
  },
  {
    "slug": "atlassian-data-center-cve-2026-21589",
    "title": "Atlassian's Critical CVE-2026-21589 Lets Attackers Steal Files from Self-Hosted Jira, Confluence, and Bitbucket Without Logging In",
    "excerpt": "A critical path-traversal flaw scored 9.3 lets unauthenticated attackers read files from the web root of eight Atlassian Data Center products, and automated scanning already began within two hours.",
    "category": "cybersecurity",
    "date": "2026-10-07",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/692fd898981fec2b55c29abdc9715bf8d7f1006b431aee5682146f5bf0cf3670.jpg"
  },
  {
    "slug": "amd-epyc-venice-zen-6-2nm",
    "title": "AMD's EPYC Venice lands: Zen 6 on TSMC 2nm, 256 cores, and a record server share",
    "excerpt": "AMD unveiled its EPYC Venice (Zen 6) family at its July 2026 Advancing AI event, building both high-performance and dense server chips on TSMC's 2nm node.",
    "category": "hardware",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/e9bc4f739aeb42160d28cd0d3145aeec2ed80936b0fe7c62848b238aab48db16.jpg"
  },
  {
    "slug": "how-certificate-authorities-trust-anchors-work-explainer",
    "title": "How certificate authorities and browser trust anchors actually work",
    "excerpt": "Why typing https is never a coincidence: the root certificates your device ships with, the chain of trust beneath every padlock, and what breaks when one link fails.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/793c1c03dbb811d954c9e3efeadb3e94d11aa7e7ea4a7b503d73a251b3ee6c2b.jpg"
  },
  {
    "slug": "mistral-large-4-le-chonk",
    "title": "Mistral's 'Le Chonk' lands: a 1-trillion-parameter multimodal model with open weights promised within the month",
    "excerpt": "Mistral Large 4 enters public preview as the company's largest model yet — a granular mixture-of-experts with roughly a trillion parameters, a 1M-token context window, and open weights due by the end of October.",
    "category": "tech",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/6bee66f816912276fed0571e2f27598f4e1216feecf76871433dfb41648f87bd.jpg"
  },
  {
    "slug": "splunk-enterprise-hardening-svd-2026-1002",
    "title": "Splunk Ships Hardening Release Fixing Five Internally Found Flaws, Top One CVSS 9.8",
    "excerpt": "Splunk released SVD-2026-1002 on 2026-10-07, fixing five internally identified flaws across Splunk Enterprise whose highest-scored finding, CVE-2026-76281, rates 9.8 Critical as improper access control. Admins should upgrade to 10.4.3, 10.2.7, 10.0.10, or 9.4.15.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/e2a6f14ee10cbe769fcddf6efd49d1ab88ce2ec54820ef87fc83ee78bcda626d.jpg"
  },
  {
    "slug": "nvidia-rtx-50-series-price-hike-2026",
    "title": "NVIDIA's Third GPU Price Hike of 2026 Pushes RTX 50-Series Cards to New Highs",
    "excerpt": "NVIDIA is implementing its third consumer GPU price hike this year, raising RTX 50-series graphics card costs by 20 to 30 percent as the AI-driven memory crunch reshapes the entire GPU market.",
    "category": "hardware",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/09f5576036342d37877625cf23e17a83f809587a0ffed18b44fe7a72a47f6eb7.jpg"
  },
  {
    "slug": "sharepoint-cve-2026-65660-cisa-kev",
    "title": "CISA Adds SharePoint Code Injection CVE-2026-65660 to KEV, Setting a Sept 28 Federal Patch Deadline",
    "excerpt": "An authenticated, low-privileged attacker can execute arbitrary code on supported Microsoft SharePoint Server versions via crafted POST requests, and CISA confirmed in-the-wild exploitation before the federal remediation deadline.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 5,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/79423d7905b18850cdf43dea16bbc2ba1feaaa33fb65e563bb685805c7b37c02.jpg"
  },
  {
    "slug": "how-oauth-2-0-authorization-code-flow-works",
    "title": "How the OAuth 2.0 Authorization Code Flow Works in 2026",
    "excerpt": "A step-by-step explainer of the OAuth 2.0 authorization code flow and why PKCE is now the default for every kind of app.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/da289cd3d7e0cd8a68b8adfa6ed0a9ebbc8cc955043f4b5ece6487ae0295bb39.jpg"
  },
  {
    "slug": "openai-mathematics-results-drop",
    "title": "OpenAI Releases a Historic Drop of AI-Generated Mathematics",
    "excerpt": "OpenAI published 722 manuscripts and 372 result families from an internal frontier model, including a proposed Navier-Stokes solution. Math leaders are pushing back on verification standards.",
    "category": "tech",
    "date": "2026-10-14",
    "read": 4,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/f33f73b10d5a097945c24a032416cee20f530d968594493052876f0c48d735c5.jpg"
  },
  {
    "slug": "pixel-modem-zero-day-cve-2026-58704",
    "title": "Google's Pixel Modem Zero-Day (CVE-2026-58704): A Proximity Threat That Needs No Tap",
    "excerpt": "CVE-2026-58704 is a high-severity privilege-escalation flaw in the Pixel cellular modem, patched in the September 2026 Pixel Update Bulletin and added to CISA's KEV catalog for active, targeted exploitation.",
    "category": "cybersecurity",
    "date": "2026-09-15",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/67bfcb4ab3fe19dc41270c2c0a647eaa73d0341b86c575384732fa6c7b7ab62f.jpg"
  },
  {
    "slug": "openai-gpt-5-5-retirement-gpt-5-6-sol",
    "title": "OpenAI Retires GPT-5.5 from ChatGPT as Users Migrate to the GPT-5.6 Family",
    "excerpt": "OpenAI has removed GPT-5.5 from ChatGPT, Work, and Codex beginning October 14, 2026, steering users to the newly launched GPT-5.6 lineup. Your API access to gpt-5.5 is unaffected.",
    "category": "tech",
    "date": "2026-10-14",
    "read": 5,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/7070a438910ad25f78c1957900e04ed590e0a4d70831799ec04fc533e65e0a23.jpg"
  },
  {
    "slug": "windows-shell-cve-2026-96951-cisa-kev",
    "title": "Windows Shell Zero-Day CVE-2026-96951 Added to CISA's KEV Amid a Record Patch Tuesday",
    "excerpt": "A Windows Shell command-injection flaw actively exploited in the wild is now on CISA's Known Exploited catalog.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 5,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/859c0c8c4519fe51a16399439cef91a356fb91b4cc7cf3616fe59225c23cbdc5.jpg"
  },
  {
    "slug": "intel-crescent-island-gpu-d-series",
    "title": "Intel's Crescent Island GPU, now the \"GPU D-Series\", aims at cheap, dense AI inference",
    "excerpt": "At OCP 2026 Intel formally named its Crescent Island AI-inference accelerator \"Intel GPU D-Series\" (Intel GDDR D), delivering up to 1.3 PFLOPS FP8 from an air-cooled, PCIe card that scales to 480 GB of integrated memory.",
    "category": "hardware",
    "date": "2026-10-14",
    "read": 4,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/c84e1572f3dedc614d4c9b9359bcea3092f46d27ab4324a7f03d706d727b2733.jpg"
  },
  {
    "slug": "how-dns-resolution-works-explainer",
    "title": "How DNS Resolution Works: From Typing a URL to an IP Address",
    "excerpt": "A step-by-step explainer of the Domain Name System: recursive resolvers, root and TLD servers, caching, and why DNS failures look the way they do.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/19da0d4ca78bc731a51b0475edf3a01fc40aab2c3a397fc056b92b9ed72aa9f9.jpg"
  },
  {
    "slug": "anthropic-claude-haiku-5-5-price-cut",
    "title": "Anthropic Shaves Claude Haiku 5.5 Prices by Up to 90%",
    "excerpt": "Released October 7, Claude Haiku 5.5 costs $0.10 per million input tokens and matches OpenAI's GPT-6 Luna on price while adding a 1-million-token context window.",
    "category": "tech",
    "date": "2026-10-08",
    "read": 4,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/576883d615b6dfa8fe1eb9a36edb531d85f2d765c84e7edee13e5d9c50cd21b4.jpg"
  },
  {
    "slug": "midnight-mimosa-firmware-android-malware",
    "title": "Midnight Mimosa: Budget Android phones ship with malware baked into the firmware",
    "excerpt": "Bitdefender says a firmware-level campaign called Midnight Mimosa is preinstalled on cheap Android devices across 150+ countries, giving attackers system-level control that owners cannot uninstall.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/2563b113414333bd91c38afe837dc586561aa9340bf34f27bae398e8e46cab17.jpg"
  },
  {
    "slug": "google-gemini-4-argon-frontier-model",
    "title": "Google's Gemini 4 Argon lands in limited release — and retakes the frontier benchmarks lead",
    "excerpt": "Google DeepMind's Gemini 4 Argon targets long-horizon software engineering, enterprise knowledge work and defensive cybersecurity. It opens at half its standard price, is gated to trusted cyber defenders first, and scores level with GPT-6 Astra on independent intelligence index.",
    "category": "tech",
    "date": "2026-10-14",
    "read": 8,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/86df2069c06c366437debe89f5fee967e89a64d3a58c7acc51defce2cf82d863.jpg"
  },
  {
    "slug": "microsoft-azure-maia-300-ai-chip",
    "title": "Microsoft's Azure Maia 300 targets cloud AI inference",
    "excerpt": "Microsoft announced its third-generation Maia AI chip, built to deliver up to 40 percent more tokens per megawatt than leading GPU systems.",
    "category": "hardware",
    "date": "2026-10-14",
    "read": 4,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/6dc68cc0ddfd107f9a9b28975f81268bdbe75393bd3df2d400aafbef31050d28.jpg"
  },
  {
    "slug": "tls-1-3-handshake-explainer",
    "title": "The TLS 1.3 handshake: why secure connections got faster and more private",
    "excerpt": "TLS 1.3, finalized in 2018, cut the secure handshake from two round trips to one, made forward secrecy mandatory, and dropped insecure legacy ciphers such as RC4 and static RSA.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/a5a89f5dd212be9b36374b2e661b5a804c4e28b3d9fc344024947d24f913a3bd.jpg"
  },
  {
    "slug": "meta-muse-wonder-frontier-model-2026",
    "title": "Meta ships its first frontier model with Muse Wonder, betting on agents and active memory",
    "excerpt": "Meta Superintelligence Labs has released Muse Wonder and Muse Wonder Full, its first frontier model pair, with agentic tool calling, active memory, and a cheaper per-token price than its rivals.",
    "category": "tech",
    "date": "2026-10-12",
    "read": 5,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/fd080341b5a70258f439537f438c48dffd2792a942e982f6d24913200ea07951.jpg"
  },
  {
    "slug": "kaspersky-q2-2026-android-threat-landscape",
    "title": "Kaspersky says Android attackers are shifting to app-store loaders as on-device malware falls",
    "excerpt": "Kaspersky's Q2 2026 mobile threat report found 1.99 million mobile malware attacks and a pivot toward dropper-based banking Trojans delivered through Google Play.",
    "category": "cybersecurity",
    "date": "2026-08-10",
    "read": 4,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/0b1007e99de979f800bdcf968ea43ee35fc92e111eec82f7845883bf580fbf87.jpg"
  },
  {
    "slug": "ledger-nano-x-spy-chip-implant",
    "title": "Ledger Nano X spy-chip implant steals recovery phrases pixel by pixel",
    "excerpt": "Tibane Labs and Grand Idea Studio document a tampered Ledger Nano X with a soldered-on second computer and cellular modem that captures the on-screen 24-word seed and exfiltrates it while passing genuine-device checks.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 9,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/70b8b7a7fc875243afaefbf6e87e4e3c0de29e2bd0a8d33a418ccbfb06ac9e1c.jpg"
  },
  {
    "slug": "how-jwt-tokens-work-explainer",
    "title": "How JWT tokens work: the three-part string behind most logins",
    "excerpt": "A JSON Web Token is a compact, signed string — header, payload, signature — that lets a server trust a request without keeping a session. Here is what each part does and where it leaks.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/156dd160c162194598fed2ef63e4cfb6060aae6b1c5ec9732cf18c316bbab5d3.jpg"
  },
  {
    "slug": "ivanti-connect-secure-root-zero-day-chain",
    "title": "Attacker Chains Three Ivanti Connect Secure Zero-Days for Root Access — Only Two Are Patched",
    "excerpt": "Volexity says attacker UTA0576 broke through a fully patched Ivanti Connect Secure appliance via a triple zero-day chain, stealing LDAP and Active Directory credentials while evading the Integrity Checker Tool.",
    "category": "cybersecurity",
    "date": "2026-10-14",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/6a6876df77a9ba7af1c32b1a84e0a41f63663c1d46c59fe89296cfcd047f5c4a.jpg"
  },
  {
    "slug": "torvalds-llm-kernel-noref-filemap",
    "title": "Linus Torvalds Wrote an Experimental Linux Kernel Series With Claude Code",
    "excerpt": "Torvalds pushed an eight-patch noref-filemap branch that triples small-read throughput on his laptop and credits Anthropic Claude Code with the code, tests, and review draft.",
    "category": "tech",
    "date": "2026-10-12",
    "read": 4,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/d624708ac52c159299d8241657d5abc4d845b46e8aa2a83760edc9e743d0df9f.jpg"
  },
  {
    "slug": "what-is-dram-explainer",
    "title": "What Is DRAM? The Memory Your Computer Runs On, Explained",
    "excerpt": "DRAM is the RAM in your computer. It stores each bit in a tiny capacitor held by one transistor, and it leaks, so it must be refreshed. Here is how it works and why it matters.",
    "category": "explainer",
    "date": "2026-10-14",
    "read": 7,
    "art": "linear-gradient(135deg, #0f0c1e 0%, #2a2152 45%, #7c5cff 100%)",
    "img": "assets/images/775e21c2b377b2a6d40c1cdaa8db447ad74abb594a54cbdf671c34d8a2c01fa0.jpg"
  },
  {
    "slug": "nvidia-rtx-5080-24gb-q1-2027",
    "title": "NVIDIA Reports a 24 GB RTX 5080 for Early 2027 as the RTX 5090 Fades From the Roadmap",
    "excerpt": "A new 24 GB RTX 5080 is reportedly slated for Q1 2027 after NVIDIA begins winding down RTX 5090 production. What is verified and what is not.",
    "category": "hardware",
    "date": "2026-10-12",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/fde7d65b6308014dea96f657c4d4581308b15f39c1172781c51d10e809ef6251.jpg"
  },
  {
    "slug": "microsoft-decision-1-model-2026",
    "title": "Microsoft Unveils Decision-1, a New Thinking Model Built to Make Fast Decisions",
    "excerpt": "Microsoft launched Decision-1, a new model that scores options and judges the next move instead of generating long text, alongside faster transcription and video models.",
    "category": "tech",
    "date": "2026-10-09",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/e279aa24351d6b264100cdded40baaed4dc46449f78ec3cd44dc3c9aa7418a6b.jpg"
  },
  {
    "slug": "docker-hub-ghostpat-cve-2026-105445-2026",
    "title": "Docker Hub’s GhostPat Flaw Let One User Push Images as Another — For Two Years",
    "excerpt": "Docker fixed a critical Docker Hub flaw, tracked as CVE-2026-105445, that let any user transfer a personal access token to another account and act as that user in the registry.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 7,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/docker-hub-ghostpat-cve-2026-105445-2026.jpg"
  },
  {
    "slug": "ram-crisis-ddr4-price-surge-2026",
    "title": "The RAM crisis has no end in sight: DDR4 prices jumped 24% in a quarter and even the old standard is now scarce",
    "excerpt": "Memory is getting pricier than ever. DDR4 is up roughly 24% in a single quarter, and Intel's CEO says consumers face one to three more years of the AI-driven shortage.",
    "category": "hardware",
    "date": "2026-10-13",
    "read": 7,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/ram-crisis-ddr4-price-surge-2026.jpg"
  },
  {
    "slug": "mistral-large-4-le-chonk-2026",
    "title": "Mistral launches Large 4 (Le Chonk), a 1-trillion-parameter open-weight model",
    "excerpt": "Mistral unveiled Mistral Large 4, a natively multimodal 1T-parameter MoE model with 52B active parameters, now in public preview on Mistral Studio with open weights due at the end of the month.",
    "category": "tech",
    "date": "2026-10-06",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/mistral-large-4-le-chonk-2026.jpg"
  },
  {
    "slug": "gitlab-1942-critical-remote-code-execution-2026",
    "title": "GitLab fixes critical remote-code-execution flaw (CVE-2026-97229) in versions 19.4.2, 19.3.4 and 19.2.8",
    "excerpt": "GitLab shipped a critical patch set on 12 October 2026 that closes an unauthenticated remote-code-execution bug in the CI/CD regular-expression compiler alongside 23 other issues.",
    "category": "cybersecurity",
    "date": "2026-10-12",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/gitlab-1942-critical-remote-code-execution-2026.jpg"
  },
  {
    "slug": "gpt-6-intelligent-ui-2026",
    "title": "OpenAI rolls out GPT-6 with Intelligent UI: answers that build calculators, charts and interactive tools",
    "excerpt": "OpenAI began rolling out GPT-6 in ChatGPT on October 7, 2026, paired with a new capability called Intelligent UI that lets the model answer questions with charts, calculators, forms and interactive tools built on the spot.",
    "category": "tech",
    "date": "2026-10-07",
    "read": 6,
    "art": "linear-gradient(135deg, #0a2820 0%, #0e3340 45%, #0a4050 100%)",
    "img": "assets/images/gpt-6-intelligent-ui-2026.jpg"
  },
  {
    "slug": "windows-11-24h2-end-of-updates-2026",
    "title": "Windows 11 24H2 and Windows 10 LTSB 2016 just hit end of updates — here's what you should do now",
    "excerpt": "Microsoft's October 2026 security release is the final update for Windows 11 24H2 (Home and Pro) and Windows 10 Enterprise LTSB 2016. The last patch also flips the Active Directory Federation Services Distributed Key Manager container ACL hardening into Enforcement mode.",
    "category": "cybersecurity",
    "date": "2026-10-13",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #7c1aff 100%)",
    "img": "assets/images/windows-11-24h2-end-of-updates-2026.jpg"
  },
  {
    "slug": "surface-laptop-ultra-rtx-spark-2026",
    "title": "Microsoft and Nvidia unveil the Surface Laptop Ultra and the RTX Spark superchip",
    "excerpt": "Microsoft's Surface Laptop Ultra ships on the new Nvidia RTX Spark superchip, starting at $2,600, alongside a $6,000 Dev Box workstation and a revamped Windows 11 built to run AI locally.",
    "category": "hardware",
    "date": "2026-10-07",
    "read": 6,
    "art": "linear-gradient(135deg, #06181f 0%, #0e3a40 45%, #1c8aff 100%)",
    "img": "assets/images/surface-laptop-ultra-rtx-spark-2026.jpg"
  },
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

/* Shared privacy notice loader. Kept outside the publisher-managed article data block. */
(function () {
  if (document.querySelector("script[data-wireshaman-consent]")) return;
  var nested = /^\/(?:articles|categories)\//.test(window.location.pathname);
  var script = document.createElement("script");
  script.src = (nested ? "../" : "") + "assets/js/consent.js";
  script.dataset.wireshamanConsent = "";
  document.head.appendChild(script);
})();
