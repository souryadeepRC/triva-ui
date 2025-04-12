// types.ts
export type OptionAction = {
  id: string;
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
};
export type PositionType = {
  top: number;
  left: number;
};
export type MenuPosition = "bottom-left" | "bottom-right";

export interface TrivaOptionMenuProps {
  position?: MenuPosition;
  MenuIcon?: React.ReactNode;
  actions: OptionAction[];
}
