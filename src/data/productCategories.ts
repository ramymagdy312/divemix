export interface Product {
  id: string;
  name: string;
  desc: string;
  features: string[];
  images: string[];
}

export interface ProductCategory {
  id: string;
  categoryName: string;
  shortDesc: string;
  hero:string;
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    categoryName: "L&W Compressors",
    shortDesc: "Diverse range of high-pressure compressors designed for various industrial needs.",
    hero: "/img/products/L&W Compressors/lw.jpg",
    image: "/img/products/L&W Compressors/lw.jpg",
    products: [
      {
        id: "lw-mobile-1",
        name: "Mobile Compressors",
        desc: "Designed for easy transport and mobility, these compressors deliver reliable performance in a compact form. Available with gasoline, diesel, or electric motors, they are perfect for field operations and on-site tasks, offering convenience and efficiency.",
        features: [
          "Medical gas systems",
          "Environmental testing",
          "Custom applications",
        ],
        images: [
          "/img/products/L&W Compressors/Mobile/1.png",
          "/img/products/L&W Compressors/Mobile/2.png",
          "/img/products/L&W Compressors/Mobile/3.png"
        ]
      },
      {
        id: "lw-compact-1",
        name: "Compact Compressors",
        desc: "Ideal for small spaces, these compressors provide efficient performance without compromising power. With capacities from 230 to 570 liters per minute, they feature robust electric motors, ensuring versatility and efficiency.",
        features: [
          "Medical gas systems",
          "Environmental testing",
          "Custom applications",
        ],
        images: [
          "/img/products/L&W Compressors/Compact/1.png",
          "/img/products/L&W Compressors/Compact/2.png",
          "/img/products/L&W Compressors/Compact/3.png"
        ]
      },
      {
        id: "lw-stationary-1",
        name: "Stationary Compressors",
        desc: "Built for permanent installations, these compressors offer robust solutions for continuous, heavy-duty operations. Available in models with capacities ranging from 230 to 1300 liters per minute, they feature powerful electric and diesel motors for various industrial needs, ensuring consistent performance and long-term durability.",
        features: [
          "Medical gas systems",
          "Environmental testing",
          "Custom applications",
        ],
        images: [
          "/img/products/L&W Compressors/Stationary/1.png",
          "/img/products/L&W Compressors/Stationary/2.png",
          "/img/products/L&W Compressors/Stationary/3.png"
        ]
      },
      {
        id: "lw-silent-1",
        name: "Silent Compressors",
        desc: "Engineered for noise-sensitive environments, these compressors combine efficient performance with low noise levels. Capacities range from 150 to 1300 liters per minute, featuring sound-insulated housing and robust electric motors for quiet yet powerful operation.",
        features: [
          "Medical gas systems",
          "Environmental testing",
          "Custom applications",
        ],
        images: [
          "/img/products/L&W Compressors/Silent/1.png",
          "/img/products/L&W Compressors/Silent/2.png",
          "/img/products/L&W Compressors/Silent/3.png"
        ]
      },
      {
        id: "lw-booster-1",
        name: "Booster Compressors",
        desc: "Ideal for high-pressure industrial applications, these compressors deliver safety and robust performance. With delivery capacities from 6 to 250 m³/h and final pressures up to 420 bar, they are perfect for laser cutting, gas injection molding, and offshore platforms, featuring customizable options for specific needs.",
        features: [
          "Medical gas systems",
          "Environmental testing",
          "Custom applications",
        ],
        images: [
          "/img/products/L&W Compressors/Booster/1.png",
          "/img/products/L&W Compressors/Booster/2.png",
          "/img/products/L&W Compressors/Booster/3.png"
        ]
      }
    ]
  },
  {
    id: "2",
    categoryName: "INMATEC Gas Generators",
    shortDesc: "Advanced compression solutions for industrial applications.",
    hero: "/img/products/INMATEC/inmatec.png",
    image: "/img/products/INMATEC/inmatec.png",
    products: [
      {
        id: "inmatec-nitrogen-1",
        name: "Nitrogen Generators",
        desc: "At Divemix Gas & Compressor technologies, we proudly partner with INMATEC, a leading manufacturer of high-quality PSA gas generators. INMATEC specializes in providing innovative solutions for on-site nitrogen and oxygen generation, ensuring you have a continuous and reliable supply of these essential gases right at your facility. Explore the benefits of INMATEC's cutting-edge technology and discover how it can transform your operations.",
        features: [
          "High Purity Levels: Achieve nitrogen purity levels up to 99.999%",
          "Cost-Efficient: Reduce dependency on gas with on-site generation",
          "Eco-Friendly: Lower your carbon footprint",
          "Reliable and Continuous Supply: Ensure uninterrupted operation",
          "Customizable Solutions: Choose from a variety of models requirements"
        ],
        images: [
          "/img/products/INMATEC/Nitrogen/1.png",
          "/img/products/INMATEC/Nitrogen/PNC-9300_PNC500.png",
          "/img/products/INMATEC/Nitrogen/PNC-9400_PNC750.png",
          "/img/products/INMATEC/Nitrogen/PNC-9900_PNC3000.png",
        ]
      },
      {
        id: "inmatec-oxygen-1",
        name: "Oxygen Generators",
        desc: "INMATEC's oxygen generators provide a dependable source of oxygen for medical, industrial, and environmental applications. From healthcare facilities to wastewater treatment plants, these generators offer a versatile and efficient solution for producing high-purity oxygen on demand.",
        features: [
          "Medical-Grade Purity: Produce oxygen with purity levels up to 95%, suitable for medical use and other critical applications",
          "Enhanced Safety: Reduce the risks associated with storing and handling high-pressure oxygen cylinders",
          "Energy Efficient: Benefit from low energy consumption and operational costs",
          "Scalable Solutions: Easily scale your oxygen production capacity to meet growing demands",
          "User-Friendly: Simple installation and operation, with minimal maintenance requirements"
        ],
        images: [
          "/img/products/INMATEC/Oxygen/1.png",
          "/img/products/INMATEC/Oxygen/PO8300_PO500.png",
          "/img/products/INMATEC/Oxygen/PO8400_PO750.png",
          "/img/products/INMATEC/Oxygen/PO8700_PO2000.png",
        ]
      }
    ]
  },
  {
    id: "3",
    categoryName: "ALMiG",
    shortDesc: "At DiveMix we are proud to partner with ALMiG, a premier provider of state-of-the-art compressed air systems. ALMiG offers a comprehensive range of innovative products designed to meet the diverse needs of various industries, ensuring efficient, reliable, and high-quality compressed air supply. Explore how ALMiG’s advanced solutions can enhance your operations and deliver exceptional performance.",
    hero: "/img/products/ALMIG/almig.png",
    image: "/img/products/ALMIG/almig.png",
    products: [
      {
        id: "1",
        name: "Custom solutions",
        desc: "ALMiG offers bespoke compressed air solutions tailored to meet the specific requirements of your industry and application. From custom compressor packages to specialized air treatment systems, ALMiG provides comprehensive solutions to ensure your operations run smoothly and efficiently.",
        features: [
          "Tailored Solutions",
          "Integrated Systems",
          "Expert Support",
          "Scalable Options",
        ],
        images: [
          "/img/products/ALMIG/Custom solutions/ALM-RD155.jpg",
          "/img/products/ALMIG/Custom solutions/ALM-RD-3300.jpg",
          "/img/products/ALMIG/Custom solutions/Filter_einzeln_ohne_Manometer.png.webp",
          "/img/products/ALMIG/Custom solutions/Keyvisual_Aufbereitung.png.webp",
        ]
      },
      {
        id: "2",
        name: "Screw Compressors",
        desc: "ALMiG’s screw compressors are renowned for their efficiency and reliability, offering a continuous supply of compressed air with minimal energy consumption. Available in various models, these compressors are suitable for both small and large-scale applications.",
        features: [
          "Variable Speed Drive (VSD)",
          "Quiet Operation",
          "Compact Design",
          "High Efficiency",
        ],
        images: [
          "/img/products/ALMIG/Screw compressors/BELT_XP4_web.png",
          "/img/products/ALMIG/Screw compressors/BELT_XP15_web.png",
          "/img/products/ALMIG/Screw compressors/BELT_XP37_web.png",
          "/img/products/ALMIG/Screw compressors/COMBI_2_5_geschlossen_web.jpg",
          "/img/products/ALMIG/Screw compressors/COMBI_6_15_geschlossen_web.jpg",
          "/img/products/ALMIG/Screw compressors/combi_offene-maschine_ohne-Behaelter_web.jpg",
          "/img/products/ALMIG/Screw compressors/GEAR_XP22_web.png",
          "/img/products/ALMIG/Screw compressors/GEAR_XP200_web.png",
        ]
      },
    ]
  },
  {
    id: "4",
    categoryName: "BEKO",
    shortDesc: "At DiveMix, we proudly partner with BEKO Technologies, a renowned leader in the field of compressed air and gas treatment solutions. BEKO Technologies offers a comprehensive range of products designed to optimize the quality and efficiency of your compressed air systems. Explore the innovative solutions provided by BEKO Technologies and see how they can enhance your operations.",
    hero: "/img/products/BEKO/beko.png",
    image: "/img/products/BEKO/beko.png",
    products: [
      {
        id: "1",
        name: "Condensate drains",
        desc: "Condensate drains Descr",
        features: [
          "High Purity Levels: Achieve nitrogen purity levels up to 99.999%",
          "Cost-Efficient: Reduce dependency on gas with on-site generation",
          "Eco-Friendly: Lower your carbon footprint",
          "Reliable and Continuous Supply: Ensure uninterrupted operation",
          "Customizable Solutions: Choose from a variety of models requirements"
        ],
        images: [
          "/img/products/BEKO/Condensate drains/bm_12_co_00_00_iso-00.png",
          "/img/products/BEKO/Condensate drains/bm_13_00_00_iso-00.png",
          "/img/products/BEKO/Condensate drains/bm_14_co_pn25_00_00_iso-00.png",
          "/img/products/BEKO/Condensate drains/bm_20_00_00_00.png",
          "/img/products/BEKO/Condensate drains/bm_20_fm_00_00_00.png",
          "/img/products/BEKO/Condensate drains/bm_32u_00_00_00.png",
          "/img/products/BEKO/Condensate drains/bm_33u_co_00_00_iso_00.png",
        ]
      },
      {
        id: "2",
        name: "Compressed Air Dryers",
        desc: "BEKO Technologies offers a variety of compressed air dryers designed to remove moisture from compressed air systems, preventing corrosion and ensuring the longevity and reliability of your equipment.",
        features: [
          "Desiccant Dryers",
          "Refrigeration Dryers",
          "Membrane Dryers",
          "Advanced Control Systems",
        ],
        images: [
          "/img/products/BEKO/Dryers/DP RA 1300 - IV.png",
          "/img/products/BEKO/Dryers/drypoint-ra-eco-klein_01.png",
          "/img/products/BEKO/Dryers/drypoint-ra-ht_01.png",
          "/img/products/BEKO/Dryers/Drypoint-ra-titel.png",
        ]
      },
      {
        id: "3",
        name: "Filtration Solutions",
        desc: "BEKO Technologies provides high-performance filtration solutions to remove contaminants from compressed air, safeguarding your equipment and processes.",
        features: [
          "High Efficiency Filters",
          "Customizable Options",
          "Durable Construction",
          "Easy Maintenance",
        ],
        images: [
         "/img/products/BEKO/Filteration/cp_s050_fwt_with-bm_00_00_01.png",
          "/img/products/BEKO/Filteration/cp_s055_vwm_00_00_01.png",
          "/img/products/BEKO/Filteration/cp_s075-fldr-dipi_00_00_01.png",
        ]
      }
    ]
  },
  {
    id: "5",
    categoryName: "Maximator",
    shortDesc: "At DiveMix, we are proud to partner with MAXIMATOR, a global leader in high-pressure technology. MAXIMATOR specializes in providing top-of-the-line high-pressure components and systems designed to meet the rigorous demands of various industrial applications. Explore how MAXIMATOR’s advanced products can enhance your operations and deliver unparalleled performance and reliability.",
    hero: "/img/products/MAXIMATOR/maximator.png",
    image: "/img/products/MAXIMATOR/maximator.png",
    products: [
      {
        id: "1",
        name: "Fittings",
        desc: "Fittings",
        features: [
          "",
        ],
        images: [
          "/img/products/MAXIMATOR/Fittings/Fittings and valves (1).png",
          "/img/products/MAXIMATOR/Fittings/Fittings and valves (2).png",
          "/img/products/MAXIMATOR/Fittings/Fittings and valves (3).png",
          "/img/products/MAXIMATOR/Fittings/Fittings and valves (4).png",
        ]
      },
      {
        id: "2",
        name: "Gas Boosters",
        desc: "Gas Boosters",
        features: [
          "Desiccant Dryers",
          "Refrigeration Dryers",
          "Membrane Dryers",
          "Advanced Control Systems",
        ],
        images: [
          "/img/products/MAXIMATOR/Gas Boosters/8DLE 165.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/DLE 15-1.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/DLE 15-2.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/DLE 15-30.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/DLE 30-75-3.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/MPLV2.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/MPLV4.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/ROB 22.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/SPLV2.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/SPLV3.jpg",
          "/img/products/MAXIMATOR/Gas Boosters/Untitled-2.jpg",
        ]
      },
      {
        id: "3",
        name: "Gas Pumps",
        desc: "Gas Pumps",
        features: [
          "High Efficiency Filters",
          "Customizable Options",
          "Durable Construction",
          "Easy Maintenance",
        ],
        images: [
          "/img/products/MAXIMATOR/Gas Pumps/DPD.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/G.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/GPD.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/GSF.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/GX.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/M.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/MO.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/MSF.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/S.jpg",
          "/img/products/MAXIMATOR/Gas Pumps/SS.jpg",
        ]
      }
    ]
  }
  
  // Note: Other categories removed for brevity, but should be updated with unique IDs similarly
];