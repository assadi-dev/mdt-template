import React from "react";
import { useReducer } from "react";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const initialModalState = {
  isOpen: false,
  view: null,
  data: null,
};

export const modalStateReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_MODAL:
      return {
        view: payload.view,
        isOpen: !state.isOpen,
        data: payload.data,
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        data: null,
      };

    default:
      break;
  }
  type;
};

const useModalState = () => {
  const [modalState, dispatchModalState] = useReducer(
    modalStateReducer,
    initialModalState
  );

  const closeModal = () => {
    dispatchModalState({ type: CLOSE_MODAL });
  };

  /**
   * Ouverture - Fermeture Modal
   * @param {*} payloadData donnée à envoyée dan la modal
   *
   * ```js
   * {view:"string", data: "" }
   *
   * ```
   *
   */
  const toggleModal = (payloadData) => {
    if (!payloadData) return;
    const { view, data } = payloadData;
    dispatchModalState({ type: TOGGLE_MODAL, payload: { view, data } });
  };

  return {
    modalState,
    dispatchModalState,
    closeModal,
    toggleModal,
  };
};

export default useModalState;
