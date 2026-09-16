export const marketsData = [
  {
    id: "iran",
    name: "Iran",
    code: "IR",
    role: "Manufacturing & Sourcing Hub",
    headline: "Connecting with manufacturers and quality suppliers",
    description: "A hub of industrial manufacturing, petrochemicals, building materials, agricultural commodities, and specialized production. Elfadimey connects international buyers with reliable Iranian suppliers and production facilities.",
    focusAreas: [
      "Heavy & light manufacturing enterprises",
      "Building materials, ceramics, stones, and steel",
      "Agricultural staples, dried fruits, and saffron",
      "Chemicals, polymers, and industrial inputs",
      "Machinery, packaging, and technical equipment"
    ],
    strategicRole: "Source & Production Node",
    tagline: "Quality Manufacturing & Direct Factory Supply",
    coordinates: { x: 72, y: 35 },
    color: "#C89D42"
  },
  {
    id: "nigeria",
    name: "Nigeria",
    code: "NG",
    role: "Commercial Gateway & Major Buyer Market",
    headline: "Identifying buyers, distributors, businesses and project opportunities",
    description: "Africa's largest economy and dynamic commercial engine. Elfadimey identifies vetted importers, retail distributors, major infrastructure contractors, and institutional buyers seeking international supply relationships.",
    focusAreas: [
      "Large-scale importers and wholesale distributors",
      "Infrastructure contractors and procurement agencies",
      "Interior design and construction businesses",
      "Hospitality developers, hotels, and institutions",
      "Commercial trading companies and retail networks"
    ],
    strategicRole: "Demand & Commercial Engine",
    tagline: "High-Growth Demand, Distribution & Project Hub",
    coordinates: { x: 42, y: 55 },
    color: "#164335"
  },
  {
    id: "africa",
    name: "African Markets",
    code: "AF",
    role: "Regional Trade Expansion Zone",
    headline: "Expanding sustainable cross-border trade opportunities",
    description: "Leveraging the African Continental Free Trade Area (AfCFTA) and established regional economic corridors (ECOWAS, EAC, SADC) to extend trade pathways for viable products, raw materials, and strategic B2B connections.",
    focusAreas: [
      "Cross-border regional distribution networks",
      "Emerging trade corridors across West, East, and Central Africa",
      "Agricultural and industrial value chain integration",
      "Institutional and commercial development projects",
      "AfCFTA tariff reduction and bilateral trade flows"
    ],
    strategicRole: "Continental Growth Frontier",
    tagline: "Expanding Cross-Border Trade & Value Chains",
    coordinates: { x: 50, y: 68 },
    color: "#0F3529"
  }
];

export const tradeCorridors = [
  {
    from: "Iran",
    to: "Nigeria",
    label: "Direct Industrial Sourcing & Supply Chain",
    detail: "Linking Iranian manufacturing capacity with Nigerian commercial, project, and distribution demand."
  },
  {
    from: "Nigeria",
    to: "African Markets",
    label: "Regional Re-Distribution & Hub Expansion",
    detail: "Utilizing Nigeria as a pivotal West African distribution launchpad into regional African economies."
  },
  {
    from: "African Markets",
    to: "Global Corridors",
    label: "Sustainable Commodities & Bilateral Trade",
    detail: "Facilitating multi-directional flow of agricultural commodities, raw materials, and finished goods."
  }
];
