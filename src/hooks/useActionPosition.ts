import { useState } from "react";

type ActionPosition = {
  top: number;
  left: number;
};
type useActionPositionResponse = {
  position: ActionPosition;
  calculatePosition: (ref: HTMLElement | null) => void;
};
const useActionPosition = (): useActionPositionResponse => {
  const [position, setPosition] = useState<ActionPosition>({
    top: 0,
    left: 0,
  });

  const calculatePosition = (ref: HTMLElement | null) => {
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
  };

  return { position, calculatePosition };
};
export default useActionPosition;
