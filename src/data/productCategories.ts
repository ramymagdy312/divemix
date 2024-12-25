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
  image: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: "1",
    categoryName: "L&W Compressors",
    shortDesc: "Diverse range of high-pressure compressors designed for various industrial needs.",
    image: "/img/products/L&W Compressors/Mobile/1.png",
    products: [
      {
        id: "1",
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
        id: "2",
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
        id: "3",
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
        id: "4",
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
        id: "5",
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
    categoryName: "INMATEC Gas Generators ",
    shortDesc: "Advanced compression solutions for industrial applications.",
    image: "/img/products/INMATEC/Nitrogen/1.png",
    products: [
      {
        id: "1",
        name: "Nitrogen Generators",
        desc: "At Divemix Gas & Compressor technologies, we proudly partner with INMATEC, a leading manufacturer of high-quality PSA gas generators. INMATEC specializes in providing innovative solutions for on-site nitrogen and oxygen generation, ensuring you have a continuous and reliable supply of these essential gases right at your facility. Explore the benefits of INMATEC's cutting-edge technology and discover how it can transform your operations.",
        features: [
        "High Purity Levels: Achieve nitrogen purity levels up to 99.999%, ",
        "Cost-Efficient: Reduce dependency on gas with on-site generation.",
        "Eco-Friendly: Lower your carbon footprint ",
        "Reliable and Continuous Supply: Ensure uninterrupted ",
      	"Customizable Solutions: Choose from a variety of models requirements."

        ],
        images: [
          "/img/products/INMATEC/Nitrogen/1.png"
        ]
      },{
        id: "1",
        name: "Oxygen Generators",
        desc: "INMATEC's oxygen generators provide a dependable source of oxygen for medical, industrial, and environmental applications. From healthcare facilities to wastewater treatment plants, these generators offer a versatile and efficient solution for producing high-purity oxygen on demand.",
        features: [
        "Medical-Grade Purity: Produce oxygen with purity levels up to 95%, suitable for medical use and other critical applications.",
        "Enhanced Safety: Reduce the risks associated with storing and handling high-pressure oxygen cylinders.",
        "Energy Efficient: Benefit from low energy consumption and operational costs.",
        "Scalable Solutions: Easily scale your oxygen production capacity to meet growing demands.",
        "User-Friendly: Simple installation and operation, with minimal maintenance requirements.",
        ],
        images: [
          "/img/products/INMATEC/Oxygen/1.png",
        ]
      }
    ]
  },
  {
    id: "3",
    categoryName: "L&W Compressors",
    shortDesc: "Diverse range of high-pressure compressors designed for various industrial needs.",
    image: "/img/products/L&W Compressors/Mobile/2.png",
    products: [
      {
        id: "1",
        name: "Industrial Compressors",
        desc: "High-performance industrial compressors designed for continuous operation in demanding environments. Features advanced control systems and energy-efficient operation.",
        features: [
        "Medical gas systems",
        "Environmental testing",
        "Custom applications",
        ],
        images: [
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  },
  {
    id: "4",
    categoryName: "ALMIG Compressors",
    shortDesc: "Advanced compression solutions for industrial applications.",
    image: "/img/products/L&W Compressors/Stationary/1.png",
    products: [
      {
        id: "1",
        name: "Industrial Compressors",
        desc: "High-performance industrial compressors designed for continuous operation in demanding environments. Features advanced control systems and energy-efficient operation.",
        features: [
        "Medical gas systems",
        "Environmental testing",
        "Custom applications",
        ],
        images: [
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  },
  {
    id: "5",
    categoryName: "L&W Compressors",
    shortDesc: "Diverse range of high-pressure compressors designed for various industrial needs.",
    image: "/img/products/L&W Compressors/Mobile/3.png",
    products: [
      {
        id: "1",
        name: "Industrial Compressors",
        desc: "High-performance industrial compressors designed for continuous operation in demanding environments. Features advanced control systems and energy-efficient operation.",
        features: [
        "Medical gas systems",
        "Environmental testing",
        "Custom applications",
        ],
        images: [
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  },
  {
    id: "6",
    categoryName: "ALMIG Compressors",
    shortDesc: "Advanced compression solutions for industrial applications.",
    image: "/img/products/L&W Compressors/Stationary/2.png",
    products: [
      {
        id: "1",
        name: "Industrial Compressors",
        desc: "High-performance industrial compressors designed for continuous operation in demanding environments. Features advanced control systems and energy-efficient operation.",
        features: [
        "Medical gas systems",
        "Environmental testing",
        "Custom applications",
        ],
        images: [
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  }
];