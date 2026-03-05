"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

const sections = {
  about: <About />,
  projects: <Projects />,
  experience: <Experience />,
  education: <Education />,
  skills: <Skills />,
  contact: <Contact />,
};

const sectionOrder = ["about", "projects", "experience", "education", "skills", "contact"];

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: (dir) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  }),
};

export default function Home() {
  const [active, setActive] = useState("about");
  const [direction, setDirection] = useState(1);

  const handleSectionChange = (id) => {
    const current = sectionOrder.indexOf(active);
    const next = sectionOrder.indexOf(id);
    setDirection(next >= current ? 1 : -1);
    setActive(id);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-white dark:bg-zinc-950">
      <div className="max-w-2xl w-full mx-auto px-6 flex flex-col h-full">
        <Header />
        <Nav active={active} onSelect={handleSectionChange} />

        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 overflow-y-auto"
            >
              <div className="pb-6">
                {sections[active]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </div>
  );
}
