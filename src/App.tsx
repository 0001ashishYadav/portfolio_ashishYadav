import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ParticleBackground from "./components/ParticleBackground";

// Intersection Observer trigger to animate elements with .fade-in-up on scroll/mount
function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
      );

      const targets = document.querySelectorAll(".fade-in-up");
      targets.forEach((target) => observer.observe(target));

      return () => observer.disconnect();
    }, 150); // slight delay to allow router transitions to complete

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollObserver />
      <div className="min-h-screen bg-bg-dark text-white overflow-x-hidden relative">
        <ParticleBackground />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
