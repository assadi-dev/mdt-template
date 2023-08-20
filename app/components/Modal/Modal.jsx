import React from "react";
import { ModalContainer, ModalOverlay } from "./Modal.styled";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

const Modal = ({ isOpen = false, onClose, children }) => {
  const animateModal = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.35, ease: easeInOut },
    },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeInOut } },
  };

  return (
    <ModalOverlay>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={animateModal}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ModalContainer>{children}</ModalContainer>{" "}
          </motion.div>
        )}
      </AnimatePresence>
    </ModalOverlay>
  );
};

export default Modal;
