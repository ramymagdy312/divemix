import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Applications from "../pages/Applications";
import News from "../pages/News";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:categoryId", element: <Products /> },
  { path: "/services", element: <Services /> },
  { path: "/applications", element: <Applications /> },
  { path: "/news", element: <News /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about", element: <About /> },
  { path: "/gallery", element: <Gallery /> },
];
