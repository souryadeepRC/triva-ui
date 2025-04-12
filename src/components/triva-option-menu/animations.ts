import { PositionType } from "./types";

export const dropdownAnimation = (position: PositionType) => {
  const { top, left } = position;
  return {
    animate: {
      top: [top - 20, top + 20, top],
      left: [left],
      opacity: [0, 0.5, 1],
    },
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  };
};
