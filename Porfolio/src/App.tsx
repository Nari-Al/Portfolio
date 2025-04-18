import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Window from "./components/Window"; // Import the Window component
import "./App.css";

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([]);
  const constraintsRef = useRef<HTMLDivElement>(null); // Define the constraintsRef

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
        <h1 className="main-title">hi! i'm nari alzence</h1>
        <p className="main-subtitle">developer & artist</p>
        <div className="button-group">
          <motion.button
            onClick={() => toggleWindow("about")}
            className="btn green"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            about
          </motion.button>
          <motion.button
            onClick={() => toggleWindow("projects")}
            className="btn blue"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            projects
          </motion.button>
          <motion.button
            onClick={() => toggleWindow("contact")}
            className="btn black"
            whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            contact
          </motion.button>
        </div>
      </motion.div >

      {
        openWindows.includes("about") && (
          <Window
            title="About"
            onClose={() => toggleWindow("about")}
            constraintsRef={constraintsRef} // Pass constraintsRef
          >
            I’m a front-end developer with a passion for design and interactivity.
          </Window>
        )
      }
      {
        openWindows.includes("projects") && (
          <Window
            title="Projects"
            onClose={() => toggleWindow("projects")}
            constraintsRef={constraintsRef} // Pass constraintsRef
          >
            Here are some cool things I’ve worked on.
          </Window>
        )
      }
      {
        openWindows.includes("contact") && (
          <Window
            title="Contact"
            onClose={() => toggleWindow("contact")}
            constraintsRef={constraintsRef} // Pass constraintsRef
          >
            Reach me at hi@nari.dev
          </Window>
        )
      }
    </div >
  );
}
