import React from "react";
import { useRef } from "react";
import DialogConfirmComponent from "./DialogConfirmComponent";
import { useState } from "react";

const confirmAction = {
  current: () => Promise.resolve(true),
};

/**
 * Retourn true ou false de l'etat de confirmation
 * @returns {boolean}
 */
export const confirm = () => {
  return confirmAction.current();
};

const DialogConfirm = ({ labelConfirm, children, ...props }) => {
  const [open, setOpen] = useState(false);

  const resolveRef = useRef(() => {});

  confirmAction.current = () => {
    return new Promise((resolve) => {
      setOpen(true);
      resolveRef.current = resolve;
    });
  };

  const cancelAction = () => {
    resolveRef.current(false);
    setOpen(false);
  };

  const onConfirmAction = () => {
    resolveRef.current(true);
    setOpen(false);
  };

  return (
    <DialogConfirmComponent
      open={open}
      onConfirm={onConfirmAction}
      onCancel={cancelAction}
      labelConfirm={labelConfirm}
      {...props}
    >
      {children}
    </DialogConfirmComponent>
  );
};

export default DialogConfirm;
