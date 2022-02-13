export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const childVarians = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};

export const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

export const whileHover = {
  scale: 1.3,
  color: "#f8e112",
  fontWeight: 700,
  originX: 0,
};
