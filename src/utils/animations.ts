interface Custom {
  duration?: number;
  delay?: number;
}

export const emergenceFromBelow = {
  hidden: (custom: Custom) => ({
    y: -1000,
    opacity: 0,
    transition: custom,
  }),

  visible: (custom: Custom) => ({
    y: 0,
    opacity: 1,
    transition: custom,
  }),
};

export const appearanceFromTheRight = {
  hidden: (custom: Custom) => ({
    x: 1000,
    opacity: 0,
    transition: custom,
  }),

  visible: (custom: Custom) => ({
    x: 0,
    opacity: 1,
    transition: custom,
  }),
};

export const appearanceFromTheLeft = {
  hidden: (custom: Custom) => ({
    x: -1000,
    opacity: 0,
    transition: custom,
  }),

  visible: (custom: Custom) => ({
    x: 0,
    opacity: 1,
    transition: custom,
  }),
};
