const animateModalContent = () => {
  return {
    animate: {
      scale: [0, 1.1, 1],
      opacity: [0, 0.75, 1],
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };
};

export default {
  animateModalContent,
};
