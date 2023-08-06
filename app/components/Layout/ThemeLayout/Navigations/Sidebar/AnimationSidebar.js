export const dropDownAnimation = {
  show: {
    height: "fit-content",
    opacity: 1,
    transition: {
      duration: 0.15,
      when: "beforeChildren",
    },
  },
  hidden: {
    height: 0,

    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const menuItemAnimation = {
  hidden: (i) => ({
    x: "-15px",
    opacity: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.25,
    },
  }),
  show: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.25,
    },
  }),
};
