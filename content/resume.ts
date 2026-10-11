// Resume content. Wrap text in **double asterisks** to make it bold.
// The avatar's facts in public/orb.js must stay backed by what's written here.

export type Role = { heading: string; meta?: string; bullets: string[] };

export const resume = {
  title: "Senior Product Designer · Payments, Risk & Internal Tools",
  location: "Accra, Ghana",
  availability: "Open to Staff Product Designer roles in London, the EU, Canada and beyond (requires visa sponsorship)",
  email: "bensackey5@gmail.com",
  links: [
    { label: "benjaminsackey.com", href: "https://benjaminsackey.com" },
    { label: "linkedin.com/in/mrbenjamint", href: "https://www.linkedin.com/in/mrbenjamint/" },
  ],

  summary:
    "Product designer with 10+ years in African fintech and payments. I design both sides of money movement: the customer checkout and onboarding, and the internal compliance, KYC/KYB and fraud tools that risk and ops teams use every day. I prototype in code and AI tools (Claude, Cursor, Figma Make), run research with merchants and agents, and set design standards across squads. I've shipped products across Ghana, Nigeria, South Africa, Kenya, Netherlands and Mauritius.",

  experience: [
    {
      heading: "Peach Payments — Senior Product Designer",
      meta: "Jan 2022 – Present · Remote · Payment gateway for merchants across Africa",
      bullets: [
        "**Internal compliance tooling (Merchant RAM).** Designed the ops dashboard for re-KYC/KYB: AML screening, trigger events, enforcement workflows and audit logging. The risk team now runs **80%+** of its risk activities in it, and automated merchant clearance rose from **29% to 44%**.",
        "**Merchant onboarding and verification.** Redesigned the KYC/KYB onboarding flow alongside a switch of verification provider. Onboarding support tickets fell **56%** (127 → 56 per period), onboarding issues dropped from **60% to 34%** of SME support tickets, and the in-progress verification stage fell from **5.2 to 1.9 days**. Tracked monthly in Lightdash.",
        "**Fraud and transaction controls.** Designed fraud management for RiskOps across three entry points: blocklisting from the transactions list, per-merchant risk rules, and a new platform-level Transaction Controls page. Gave risk teams direct visibility of which merchants, accounts and transactions to block or monitor, so bad actors can no longer hide inside larger merchant groups.",
        "**Embedded Checkout.** Led design from discovery to launch, replacing redirect checkout with an embedded, merchant-branded widget. **+17%** merchant conversion in month one, **−23%** payment drop-offs, and **70%** of target merchants integrated within 6 weeks.",
        "**Merchant dashboard.** Redesigned Credentials (API keys, webhooks) and other self-serve flows, presented as working code prototypes for engineering handoff.",
        "**Design system and AI workflow.** Built the multi-product design system, now in the codebase and used by every frontend engineer across all product pods. Turned it into AI context files so the team generates on-system UI in Claude, Cursor and Figma Make; made AI prototyping the default for design reviews.",
        "**Team.** Mentor junior designers on UX documentation and component-driven design; run workshops with Risk, Ops, Sales, Product and Engineering.",
      ],
    },
    {
      heading: "Vitara (Consultant)",
      meta: "Ghana · Netherlands · Agri-supply-chain platform for smallholder farmers",
      bullets: [
        "Leading the tech team's shift to AI-assisted, product-led, data-driven delivery after the company's funding round.",
        "Shaping TreeSyt, Vitara's internal operations platform, into a configurable product for enterprise clients.",
        "Manage a product design manager and backend engineers; introduced a new roadmap and prioritisation process.",
      ],
    },
    {
      heading: "Digital BECE Exam Platform (WAEC Ghana contract) — Product & Design Consultant",
      meta: "Feb 2023 – Nov 2025 · Accra",
      bullets: [
        "Designed the UX for a national computer-based exam system for Ghana's BECE, built to reduce exam malpractice.",
        "Ran a pilot across 4 trial centres with private schools (30+ students per school), observing candidates live and iterating on the design between sessions.",
      ],
    },
    {
      heading: "Float (YC-backed) — Product Design Lead",
      meta: "Dec 2020 – Dec 2021 · Accra · SME credit and payments, Ghana and Nigeria",
      bullets: [
        "Led design of the Float virtual card, giving SMEs credit at the point of purchase instead of cash loans, to cut defaults. Interviewed 70+ SMEs across Ghana and Nigeria to validate the model.",
        "Worked with Risk, Compliance and Engineering on card issuing, KYC and PCI DSS. Reached **70%** active use among approved SMEs and **30%** faster business transactions than cash credit in the first three months.",
        "Introduced design sprints, critiques and a research repository. Design delivery time fell **40%**; time-to-market for new features fell **30%**.",
      ],
    },
    {
      heading: "Farmerline — Design Lead",
      meta: "Sep 2019 – Nov 2020 · Accra · AgTech",
      bullets: [
        "Led the redesign of core platform features for farmer-facing tools: **+20%** engagement and **+30%** customer satisfaction.",
        "Introduced a shared design framework across product teams serving smallholder farmers in multiple markets.",
      ],
    },
    {
      heading: "Hubtel — Senior Product Designer",
      meta: "Mar 2016 – Sep 2019 · Accra · Payments and commerce",
      bullets: [
        "Led redesigns across Hubtel's payments and commerce products, raising engagement **49%**.",
        "Partnered with engineering and product leadership to define product vision and ship multi-platform experiences.",
      ],
    },
    {
      heading: "Earlier roles",
      bullets: [
        "**Esoko** — Product Designer, May 2013 – Mar 2016. Designed farmer-facing market price and data products, grounded in field research with farmers and agents.",
        "**Business Ghana** — Frontend Engineer, May 2010 – Mar 2013. Built responsive web apps; cut page load times 80% through code-splitting and caching.",
      ],
    },
  ] as Role[],

  skills: [
    { label: "Design", text: "product strategy, discovery and research, interaction design, prototyping, design systems, internal and ops tooling, accessibility" },
    { label: "Domains", text: "payments and checkout, KYC/KYB, AML screening, fraud and transaction controls, SME credit, PCI DSS" },
    { label: "Tools", text: "Figma, Figma Make, Claude, Cursor, React, Tailwind CSS, shadcn/ui" },
  ],

  talks: [
    { show: "Building Bytes", kind: "podcast", href: "https://open.spotify.com/episode/4hiCfVS8VIGEXyd41GHtrI", topic: "the evolution of Ghana's product design space", date: "Mar 2024" },
    { show: "Demo Fridays", kind: "panel", href: "https://open.spotify.com/episode/6Smk6gqZh4b3Fj4lsx37C0", topic: "building technology for the Ghanaian market", date: "Oct 2023" },
  ],

  education: { school: "Ghana Technology University", detail: "Information Technology, 2012 – 2016" },
};
