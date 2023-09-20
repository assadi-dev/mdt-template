import { AnimatePresence, easeInOut, motion } from "framer-motion";
import React from "react";
import { ModalContainer, ModalOverlay } from "../Modal.styled";
import {
  ConfirmButton,
  DeleteConfirm,
  DeleteRowBtn,
  DialogContent,
  HeaderModalDelete,
} from "./DialogueConfirm.styled";
import { createPortal } from "react-dom";
import CloseModalBtn from "../CloseModalBtn";

const DialogConfirmComponent = ({
  open,
  onConfirm,
  onCancel,
  children,
  labelConfirm,
  ...props
}) => {
  const animateModal = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.35, ease: easeInOut },
    },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easeInOut } },
  };

  return createPortal(
    <AnimatePresence>
      {open && (
        <ModalOverlay>
          <motion.div
            variants={animateModal}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ModalContainer className="modal-theme-color" {...props}>
              <DeleteConfirm>
                <HeaderModalDelete>
                  <CloseModalBtn className="close-section" onClick={onCancel} />
                </HeaderModalDelete>
                <DialogContent className="form-theme-color">
                  <p className="title">{labelConfirm}</p>
                  {children}
                  <DeleteRowBtn>
                    <ConfirmButton
                      className="bg-danger-btn"
                      type="submit"
                      onClick={onConfirm}
                    >
                      Confirmer
                    </ConfirmButton>
                    <ConfirmButton
                      className="bg-btn-theme-color"
                      type="button"
                      onClick={onCancel}
                    >
                      Annuler
                    </ConfirmButton>
                  </DeleteRowBtn>
                </DialogContent>
              </DeleteConfirm>
            </ModalContainer>{" "}
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default DialogConfirmComponent;
