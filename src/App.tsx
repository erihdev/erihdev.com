import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ContactWizard } from './components/ContactWizard';
import { Footer } from './components/Footer';

function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothYProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-[#020617]">
      <div className="bg-noise" />

      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          style={{ opacity: useTransform(smoothYProgress, [0, 0.5], [0.3, 0.1]) }}
          className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-primary/20 rounded-full blur-[160px] animate-pulse"
        />
        <motion.div
          style={{ opacity: useTransform(smoothYProgress, [0, 0.8], [0.2, 0.4]) }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[140px]"
        />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <Services />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
