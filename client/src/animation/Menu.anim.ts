export const menuSlide = {
  initial: { x: "calc(-100%)" },
  enter: { x: "0", transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(-100%)",
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },
};

export const categorySlide = {
  initial: { y: "calc(-10%)",opacity:0 },
  enter: {
    y: "0",
    opacity:1,
    transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    y: "calc(-10%)",
    opacity:0,
    transition: { duration: 0.1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
