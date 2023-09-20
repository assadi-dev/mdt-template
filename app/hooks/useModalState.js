import React from "react";
import { useReducer } from "react";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";
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
    case OPEN_MODAL:
      return {
        view: payload.view,
        isOpen: true,
        data: payload.data,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
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

  /**
   * Ouverture Modal
   * @param {*} payloadData donnée à envoyée dan la modal
   *
   * ```js
   * {view:"string", data: "" }
   *
   * ```
   *
   */
  const openModal = (payloadData) => {
    if (!payloadData) return;
    const { view, data } = payloadData;
    dispatchModalState({ type: OPEN_MODAL, payload: { view, data } });
  };

  return {
    modalState,
    dispatchModalState,
    openModal,
    closeModal,
    toggleModal,
  };
};

export default useModalState;
