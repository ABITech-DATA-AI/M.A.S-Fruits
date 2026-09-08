import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat.jsx";
import PageLoader from "./components/PageLoader/PageLoader.jsx";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Products from "./pages/Products/Products.jsx";
import Farms from "./pages/Farms/Farms.jsx";
import Quality from "./pages/Quality/Quality.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Services from "./pages/Services/Services.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

// Drives the branded PageLoader: shown briefly on the very first load of
// the site, and again for a beat every time the route changes — so
// clicking a nav link feels like the page "reloaded" with the MAS Fruits
// logo, even though it's really an instant client-side navigation. Also
// jumps the viewport to the top of the new page.
function useRouteLoader() {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      const t = setTimeout(() => setLoading(false), 900);
      return () => clearTimeout(t);
    }
    setLoading(true);
    window.scrollTo(0, 0);
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  return loading;
}

export default function App() {
  const { pathname } = useLocation();
  const loading = useRouteLoader();
  return (
    <>
      <PageLoader show={loading} />
      <Navbar />
      <main className="page-content">
        {/* key={pathname} forces each page to fully remount on navigation,
            so it always starts fresh at the top like a reloaded page. */}
        <Routes location={pathname} key={pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/farms" element={<Farms />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
