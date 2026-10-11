/* ============================================================
   WireShaman — articles.js
   SINGLE SOURCE OF ARTICLE DATA. The daily pipeline REGENERATES
   this whole file. The home page + all category sections are
   rendered from these objects — no duplicated markup, no
   repeated code. Just push new objects into ARTICLES and the
   site updates itself (feature grid + per-category rows + cards).

   Each article:
   { slug, title, excerpt, category, date, read (minutes), art }
   category: cybersecurity | tech | hardware | explainer
   art: CSS gradient used for the card art (no images needed)

   PIPELINE REGEN: replace everything between START/END below.
   ============================================================ */
window.CS = window.CS || {};

/* ===== ARTICLE DATA — START ===== */
window.CS.ARTICLES = [
  {
    slug: "zeroday-password-manager-exploited",
    title: "Zero-Day in a Major Password Manager Is Being Actively Exploited",
    excerpt: "A critical flaw lets attackers steal vault contents from a single compromised browser session. Security teams should patch, rotate, and audit now.",
    category: "cybersecurity",
    date: "2026-02-11",
    read: 7,
    art: "linear-gradient(135deg,#1b0f2e,#0e1a2e)"
  },
  {
    slug: "ai-agent-sandbox-escapes",
    title: "How a Routine Prompt Got an AI Agent Out of Its Sandbox",
    excerpt: "A developer's casual instruction chained together into a full filesystem escape — a warning for anyone letting autonomous agents hold real credentials.",
    category: "tech",
    date: "2026-02-11",
    read: 6,
    art: "linear-gradient(135deg,#241736,#101c2c)"
  },
  {
    slug: "post-quantum-crypto-deadline",
    title: "The Post-Quantum Deadline Is Closer Than Most Think",
    excerpt: "Hybrid ciphers are landing in TLS stacks, and the migration clock is now measured in years, not decades. Here's what your org actually needs to do.",
    category: "cybersecurity",
    date: "2026-02-10",
    read: 8,
    art: "linear-gradient(135deg,#0f2330,#121420)"
  },
  {
    slug: "chiplet-cpu-review",
    title: "What Chiplet Chips Actually Mean for the Rest of Us",
    excerpt: "Modular silicon has quietly changed how CPUs get built. The trade-offs are subtle — performance per watt rises, but so does the complexity of the supply chain.",
    category: "hardware",
    date: "2026-02-10",
    read: 9,
    art: "linear-gradient(135deg,#0f2a24,#0e1626)"
  },
  {
    slug: "ransomware-double-extortion",
    title: "Ransomware Groups Are Now Encrypting Your Backups Too",
    excerpt: "The double-extortion playbook is expanding to cloud snapshots. If your recovery plan assumes local backups, it's time to rethink it.",
    category: "cybersecurity",
    date: "2026-02-09",
    read: 6,
    art: "linear-gradient(135deg,#2a1220,#0e1826)"
  },
  {
    slug: "on-device-llm-guide",
    title: "On-Device LLMs: What They Can and Can't Do Yet",
    excerpt: "Small local models are finally useful. But the performance ceiling is still real, and the trade-offs matter if you care about privacy.",
    category: "tech",
    date: "2026-02-09",
    read: 5,
    art: "linear-gradient(135deg,#241d0f,#101a28)"
  },
  {
    slug: "what-mfa-means",
    title: "Explainer: What MFA Actually Protects Against",
    excerpt: "Multi-factor auth stops most account-takeovers — if done right. Here's the difference between the kinds that bite and the ones that don't.",
    category: "explainer",
    date: "2026-02-08",
    read: 4,
    art: "linear-gradient(135deg,#2a2410,#121624)"
  },
  {
    slug: "solid-state-drives-2026",
    title: "The SSD Market in 2026: What's Actually Getting Cheaper",
    excerpt: "NAND prices keep drifting down, but the tiers you buy matter more than the headline number. A quick guide to what's worth it.",
    category: "hardware",
    date: "2026-02-08",
    read: 5,
    art: "linear-gradient(135deg,#10202c,#151622)"
  }
];
/* ===== ARTICLE DATA — END ===== */
