// styles
import "./TUIModal.css";

type AppTheme = "dark" | "light" | "default";
interface ModalProps {
  onClose: () => void;
  appTheme?: AppTheme;
  children: React.ReactElement;
}
const TUIModal: React.FC<ModalProps> = (props) => {
  const { onClose, children, appTheme = "default" } = props || {};
  return (
    <div
      data-testid="tui-modal-container"
      data-theme={appTheme}
      className="TUIModal__container"
      onClick={onClose}
    >
      <div className="TUIModal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
export default TUIModal;
