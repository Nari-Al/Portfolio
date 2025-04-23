import { motion } from "framer-motion";

interface AnimatedButtonProps {
    onClick: () => void;
    imageUrl?: string; // Optional image URL
    children: React.ReactNode;
    className?: string; // Optional className for styling
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick, imageUrl, children, className }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`animated-button ${className || ""}`}
            whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 20 }, // Spring animation
            }}
            whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 300, damping: 20 }, // Spring animation for tap
            }}
        >
            {imageUrl && <img src={imageUrl} alt="" className="button-icon" />}
            {children}
        </motion.button>
    );
};

export default AnimatedButton;