export const chevronAnimation = {
  show: (isOpen) => ({
    rotate: isOpen ? 90 : -90,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  }),
  hidden: () => ({
    rotate: -90,
    /*     transition: {
      duration: 0.35,
    }, */
  }),
};

export const dropdownAnimation = {
  show: (isOpen) => ({
    y: 10,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  }),
  hidden: () => ({
    y: 0,
    opacity: 0,
  }),
};
