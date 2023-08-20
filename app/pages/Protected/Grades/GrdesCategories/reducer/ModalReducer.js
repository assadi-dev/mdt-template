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
