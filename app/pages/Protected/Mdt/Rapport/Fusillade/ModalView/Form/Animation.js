export const listContainerTransition = {
  show: {
    height: "fit-content",
    transition: {
      duration: 0.25,
      when: "beforeChildren",
    },
  },
  hidden: {
    height: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const listeSaisieAnimation = {
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  hidden: {
    opacity: 0,
    x: -25,
    transition: {
      delay: 0.25,
    },
  },
};
