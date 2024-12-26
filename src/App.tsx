import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopRoute from "./components/common/ScrollToTopRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Applications from "./pages/Applications";
import News from "./pages/News";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <ScrollToTopRoute />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:categoryId" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;