/* ============================================================
   HURON HEDGE FUND CLUB — SITE CONTENT
   ============================================================
   This is the ONLY file most people need to edit during the year.
   Change the values below, save, then commit + push to GitHub.
   The site will rebuild itself automatically on GitHub Pages.

   Tips:
   - Keep the commas between items.
   - Wrap text in "double quotes".
   - Don't delete the curly braces { } or square brackets [ ].
   - If you break something, the page will just look empty/broken —
     it won't crash. Undo your last change and re-check for a
     missing comma or quote.
   ============================================================ */

window.HURON_DATA = {

  // ----------------------------------------------------------
  // CONTACT / SOCIAL LINKS
  // ----------------------------------------------------------
  contact: {
    email: "huronhedgeclub@example.com",
    linkedin: "#",
    instagram: "#"
  },

  // ----------------------------------------------------------
  // SECTORS (shown on the home page)
  // Add or remove as many as you want.
  // ----------------------------------------------------------
  desks: [
    {
      ticker: "HHC:AI",
      name: "Artificial Intelligence",
      description: "Infrastructure, applied AI, and the businesses being repriced around it."
    },
    {
      ticker: "HHC:CRY",
      name: "Crypto & Digital Assets",
      description: "Market structure, tokenomics, and the names bridging crypto into public markets."
    },
    {
      ticker: "HHC:RTL",
      name: "Consumer & Retail",
      description: "Brand economics, unit-level margins, and where consumer spend is actually going."
    },
    {
      ticker: "HHC:NRG",
      name: "Energy",
      description: "Commodity cycles, transition capex, and the names positioned for both."
    }
  ],

  // ----------------------------------------------------------
  // FUND PERFORMANCE PAGE
  // ----------------------------------------------------------
  performance: {
    stats: {
      ytdReturn: "18.6%",       // shown with an up arrow. Use a negative number like "-4.2%" for a down arrow.
      activePositions: "14",
      winRate: "61%",
      desksReporting: "5"
    },

    // Chart caption under the NAV graph. The chart shape itself is illustrative —
    // ask in chat if you'd like it wired up to real numbers later.
    chartCaption: "ILLUSTRATIVE DATA — replace with your real paper-fund NAV once tracked.",

    // Open positions table. side is "long" or "short".
    positions: [
      { desk: "AI",      side: "long",  name: "Northwind Compute",   entry: "142.10", mark: "168.40", change: "+18.5%" },
      { desk: "AI",      side: "short", name: "Halcyon Assistants",  entry: "58.20",  mark: "51.05",  change: "+12.3%" },
      { desk: "Crypto",  side: "long",  name: "Ledgerway Protocol",  entry: "9.40",   mark: "11.85",  change: "+26.1%" },
      { desk: "Retail",  side: "short", name: "Braxton Apparel Co.", entry: "34.60",  mark: "37.90",  change: "-9.5%" },
      { desk: "Energy",  side: "long",  name: "Meridian Solar",      entry: "21.15",  mark: "19.80",  change: "-6.4%" },
      { desk: "Fintech", side: "long",  name: "Cambrian Pay",        entry: "76.00",  mark: "88.30",  change: "+16.2%" }
    ]
  },

  // ----------------------------------------------------------
  // MEMBERS PAGE
  // category must be exactly "exec", "pm", "econ", "advisor", or "analysts"
  // (these match the filter buttons on the Members page)
  //
  // photo (optional): path to a square-ish photo, e.g. "assets/members/yourname.jpg".
  // Drop new photos into assets/members/ and reference them here.
  // If you leave "photo" out entirely (or set it to ""), the card shows
  // colored initials instead — no photo required to add someone.
  // ----------------------------------------------------------
  members: [
    { initials: "AA", name: "Aliya Adair", role: "Co-President", bio: "Sets IC agenda and oversees fund-wide risk across all sectors.", category: "exec", photo: "assets/members/aliya-adair.jpg" },
    { initials: "LC", name: "Lachlan Cook", role: "Co-President", bio: "Owns position sizing and long/short balance across the book.", category: "exec", photo: "assets/members/lachlan-cook.jpg" },
    { initials: "RC", name: "R. Chen", role: "AI Portfolio Manager", bio: "Runs the AI sector's coverage list and mentors incoming analysts.", category: "pm" },
    { initials: "MP", name: "M. Patel", role: "Crypto Portfolio Manager", bio: "Covers market structure and digital-asset market microstructure.", category: "pm" },
    { initials: "SA", name: "S. Alvarez", role: "Retail Portfolio Manager", bio: "Focuses on consumer brand economics and channel checks.", category: "pm" },
    { initials: "TN", name: "T. Novak", role: "Energy Portfolio Manager", bio: "Tracks commodity cycles and transition-capex names.", category: "pm" },
    { initials: "EL", name: "Add a name", role: "Economic Lead", bio: "Replace this placeholder with your Economic Lead's real name and bio in js/data.js.", category: "econ" },
    { initials: "AD", name: "Add a name", role: "Advisor", bio: "Replace this placeholder with your Advisor's real name and bio in js/data.js.", category: "advisor" },
    { initials: "LF", name: "L. Fischer", role: "Analyst, AI Sector", bio: "Second-year analyst building out infrastructure coverage.", category: "analysts" },
    { initials: "KB", name: "K. Byrne", role: "Analyst, Crypto Sector", bio: "First-year analyst focused on tokenomics and protocol design.", category: "analysts" }
  ],

  // ----------------------------------------------------------
  // INSIGHTS PAGE (sector write-ups)
  // side must be "long" or "short"
  // ----------------------------------------------------------
  insights: [
    {
      side: "long",
      desk: "AI SECTOR",
      title: "Why we're long on AI infrastructure, not applications",
      body: "The application layer is where the hype lives, but the sector's thesis is that the picks-and-shovels names carry the more durable margin structure through the cycle.",
      byline: "R. Chen · AI Portfolio Manager"
    },
    {
      side: "short",
      desk: "RETAIL SECTOR",
      title: "The channel checks behind our apparel short",
      body: "Inventory build and promotional cadence point to margin pressure the sector doesn't think is priced in yet.",
      byline: "S. Alvarez · Retail Portfolio Manager"
    },
    {
      side: "long",
      desk: "CRYPTO SECTOR",
      title: "Reading protocol revenue like a real income statement",
      body: "The sector's framework treats on-chain fee revenue the same way it would treat any other cash-generating business — and a handful of names now clear that bar.",
      byline: "M. Patel · Crypto Portfolio Manager"
    },
    {
      side: "long",
      desk: "ENERGY SECTOR",
      title: "Transition capex is a two-sided trade",
      body: "The sector's coverage list treats the energy transition as a capex story first — and looks for the names funding it, not just riding it.",
      byline: "T. Novak · Energy Portfolio Manager"
    }
  ],

  // ----------------------------------------------------------
  // JOIN PAGE
  // ----------------------------------------------------------
  join: {
    intro: "Five stages: apply, interview, training pipeline, sector placement, then your first IC pitch. No finance background required.",
    // Sector options shown in the application form dropdown.
    // Keep this in sync with the "desks" list above.
    deskOptions: [
      "Artificial Intelligence",
      "Crypto & Digital Assets",
      "Consumer & Retail",
      "Energy",
      "No preference"
    ],
    // IMPORTANT: the form does not send anywhere until you connect it.
    // See README.md for how to hook this up to Formspree or Google Forms (~5 minutes).
    formEndpoint: "" // e.g. "https://formspree.io/f/xxxxxxx"
  },

  // ----------------------------------------------------------
  // HOME PAGE COPY
  // ----------------------------------------------------------
  home: {
    heroTitle: "Long/short investing, run by students who argue both sides.",
    heroSub: "Huron Hedge Fund Club runs a student paper fund across sectors — every position gets pitched, and then pitched against, before it reaches the investment committee.",
    modelLede: "Every position a sector proposes gets argued in both directions before it reaches the investment committee. That tension is the point.",
    joinLede: "No finance background required — just a genuine interest in figuring out why a stock should move."
  }
};
