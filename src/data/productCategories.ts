export interface Product {
  id: string;
  name: string;
  desc: string;
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
    image: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
    products: [
      {
        id: "1",
        name: "Mobile Compressors",
        desc: "Designed for easy transport and mobility, these compressors deliver reliable performance in a compact form. Available with gasoline, diesel, or electric motors, they are perfect for field operations and on-site tasks, offering convenience and efficiency.",
        images: [
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  },
  {
    id: "2",
    categoryName: "ALMIG Compressors",
    shortDesc: "Advanced compression solutions for industrial applications.",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
    products: [
      {
        id: "1",
        name: "Industrial Compressors",
        desc: "High-performance industrial compressors designed for continuous operation in demanding environments. Features advanced control systems and energy-efficient operation.",
        images: [
          "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?auto=format&fit=crop&w=800",
          "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=800"
        ]
      }
    ]
  }
];