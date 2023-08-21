export const AnimationGradeItem = {
  hidden: (index) => ({
    opacity: 0,
    x: "-5px",
    transition: { delay: index * 0.15 },
  }),
  show: (index) => ({
    opacity: 1,
    x: 0,
    transition: { delay: index * 0.15, duration: 0.35 },
  }),
};
