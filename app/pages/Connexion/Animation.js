export const ConnexionCardAnimation = {
  hidden: {
    y: 15,
    opacity: 0,
    transition: {
      duration: 0.35,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

export const ErrorConnexionApparition = {
  hidden: {
    y: -5,
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.15,
    },
  },
};

export const InputAnimation = {
  hidden: (stagger) => ({
    x: -5,
    opacity: 0,
    transition: {
      duration: 0.35,
    },
  }),
  show: (stagger) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  }),
};
