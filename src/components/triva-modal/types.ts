type AppTheme = "dark" | "light" | "default";
type ModalSize = "xs" | "sm" | "md" | "lg" | "xl";
export interface TrivaModalProps {
  /**Required: boolean for open state  */
  isOpen: boolean;
  /**Required: Title content of Modal header */
  title: string | React.ReactElement;
  /**Required: Callback triggered when modal is closed */
  onClose: () => void;
  children: React.ReactElement | string;

  size?: ModalSize;
  className?: string;
  appTheme?: AppTheme;

  showCloseButton?: boolean;
  topDivider?: boolean;
  bottomDivider?: boolean;

  primaryAction?: React.ReactElement;
  secondaryAction?: React.ReactElement;

  dataTestId?: string;
  ariaLabelCloseButton?: string;
  ariaLabelDialog?: string;
}
