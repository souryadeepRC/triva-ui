import { useRef } from "react";
import ReactDOM from "react-dom";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { motion } from "motion/react";
import ActionList from "./ActionList";
import { useToggle, useActionPosition } from "../../hooks";
import { MenuPosition, PositionType, TrivaOptionMenuProps } from "./types";
import { dropdownAnimation } from "./animations";
import "./TrivaOptionMenu.css";

const positionOffsets = {
  "bottom-left": { top: 20, left: -150 },
  "bottom-right": { top: 20, left: 20 },
};
const alterOptionPosition = (
  optionPosition: MenuPosition,
  position: PositionType
) => {
  const offset = positionOffsets[optionPosition];

  return {
    top: position.top + offset.top,
    left: position.left + offset.left,
  };
};

const TrivaOptionMenu: React.FC<TrivaOptionMenuProps> = ({
  position: optionPosition = "bottom-left",
  MenuIcon,
  actions,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, toggleOpen] = useToggle(false);
  const { position, calculatePosition } = useActionPosition();

  const handleIconClick = () => {
    calculatePosition(buttonRef.current);
    toggleOpen();
  };

  const handleActionClick = (callback: () => void) => (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleOpen();
    callback();
  };

  const actionMenuPosition = alterOptionPosition(optionPosition, position);
  return (
    <>
      <div className="Triva_Option_menu">
        <IconButton
          onClick={handleIconClick}
          ref={buttonRef}
          data-testId="triva_option_menu__icon"
          aria-label="Option Menu Icon"
        >
          {MenuIcon || <MoreVertIcon />}
        </IconButton>
      </div>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            role="presentation"
            className="Triva_Menu__overlay"
            onClick={toggleOpen}
          >
            <motion.div
              className="Triva_Menu__container"
              {...dropdownAnimation(actionMenuPosition)}
            >
              <ActionList actions={actions} onActionClick={handleActionClick} />
            </motion.div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TrivaOptionMenu;
