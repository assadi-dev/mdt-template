import React, { useEffect, useState } from "react";
import { ModalContainer, ModalOverlay } from "./Modal.styled";
import { AnimatePresence, motion, easeInOut } from "framer-motion";

const Modal = ({ isOpen = false, onClose, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow((prevState) => (prevState = isOpen));
  }, [isOpen]);

  const animateModal = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.35, ease: easeInOut },
    },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeInOut } },
  };

  return (
    <AnimatePresence>
      {show && (
        <ModalOverlay>
          <motion.div
            variants={animateModal}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ModalContainer>{children}</ModalContainer>{" "}
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
