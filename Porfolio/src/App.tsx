import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Window from "./components/Window";
import AnimatedButton from "./components/AnimatedButton"; // Import the new component
import "./App.scss";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const constraintsRef = useRef<HTMLDivElement>(null);

  const toggleWindow = (name: string) => {
    setOpenWindows((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  return (
    <div className="main-background" ref={constraintsRef}>
      <motion.div
        className="main-window"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="main-title">hi! <b>i'm nari alzence</b></h1>
        <p className="main-subtitle">frontend developer & ux/ui designer</p>
        <div className="button-group">
          <AnimatedButton onClick={() => toggleWindow("about")} imageUrl="Coder.svg" className="btn">
            about
          </AnimatedButton>
          <AnimatedButton onClick={() => toggleWindow("projects")} imageUrl="Launch.svg" className="btn">
            projects
          </AnimatedButton>
          <AnimatedButton onClick={() => toggleWindow("FAQ")} imageUrl="FAQ.svg" className="btn">
            FAQ
          </AnimatedButton>
          <AnimatedButton onClick={() => toggleWindow("contact")} imageUrl="Email-marketing.svg" className="btn">
            contact
          </AnimatedButton>
        </div>
      </motion.div>
      <AnimatePresence>
        {openWindows.includes("about") && (
          <Window
            title="About"
            onClose={() => toggleWindow("about")}
            constraintsRef={constraintsRef}
          >
            I’m a front-end developer with a passion for design and interactivity.
          </Window>
        )}
        {openWindows.includes("projects") && (
          <Window
            title="Projects"
            onClose={() => toggleWindow("projects")}
            constraintsRef={constraintsRef}
          >
            Here are some cool things I’ve worked on.
          </Window>
        )}
        {openWindows.includes("contact") && (
          <Window
            title="Contact"
            onClose={() => toggleWindow("contact")}
            constraintsRef={constraintsRef}
          >
            Reach me at hi@nari.dev
          </Window>
        )}
        {openWindows.includes("FAQ") && (
          <Window
            title="FAQ"
            onClose={() => toggleWindow("FAQ")}
            constraintsRef={constraintsRef}
          >
            How do you usually answer to questions ? I answer with words.
          </Window>
        )}
      </AnimatePresence>
    </div>
  );
}
