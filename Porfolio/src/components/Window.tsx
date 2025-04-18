import { motion } from "framer-motion";
import { ReactNode, RefObject } from "react";

interface WindowProps {
    title: string;
    children: ReactNode;
    onClose: () => void;
    constraintsRef: RefObject<HTMLDivElement | null>; // Allow constraintsRef to be null
}

const Window: React.FC<WindowProps> = ({ title, children, onClose, constraintsRef }) => {
    return (
        <motion.div
            className="window"
            drag
            dragConstraints={constraintsRef} // Use the passed constraintsRef
            dragMomentum={false}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
        >
            <div className="handle window-header">
                <span>{title}</span>
                <button onClick={onClose} className="close-button">✕</button>
            </div>
            <div className="window-content">{children}</div>
        </motion.div>
    );
};

export default Window;