import ReactDOM from "react-dom";
import { motion } from "motion/react";
import ModalAnimation from "./animation";
// styles
import "./TrivaModal.css";
import React, { useRef } from "react";
import { Close } from "@mui/icons-material";
import { TrivaModalProps } from "./types";
import { IconButton } from "@mui/material";
import useModalFocus from "./useModalFocus";

const TrivaModal: React.FC<TrivaModalProps> = (props) => {
  const {
    isOpen,
    title,
    className = "",
    showCloseButton = true,
    topDivider = false,
    bottomDivider = false,
    primaryAction,
    secondaryAction,
    size = "md",
    onClose,
    children,
    appTheme = "light",
    dataTestId = "triva-modal",
    ariaLabelCloseButton = "Modal Close Button",
    ariaLabelDialog = "Modal Information",
  } = props || {};

  const modalRef = useRef<HTMLDivElement>(null);
  useModalFocus(isOpen, modalRef, onClose);
  if (!isOpen) return <></>;
  const showActions = !!primaryAction || !!secondaryAction;

  return ReactDOM.createPortal(
    <div
      role="presentation"
      data-testid="triva-modal-container"
      data-theme={appTheme}
      className="TrivaModal__container"
      onClick={onClose}
    >
      <motion.div
        tabIndex={0}
        ref={modalRef}
        className={`TrivaModal__paper ${size} ${className}`}
        {...ModalAnimation.animateModalContent()}
        onClick={(e) => e.stopPropagation()}
        data-testid={dataTestId}
      >
        <div className={`Modal__title ${topDivider ? "top-divider" : ""}`}>
          <h1 tabIndex={0}>{title}</h1>
          {showCloseButton && (
            <IconButton aria-label={ariaLabelCloseButton} onClick={onClose}>
              <Close />
            </IconButton>
          )}
        </div>
        <div aria-label={ariaLabelDialog} className="Modal__content">
          {children}
        </div>
        {showActions && (
          <div
            className={`Modal__actions ${
              bottomDivider ? "bottom-divider" : ""
            }`}
          >
            {secondaryAction}
            {primaryAction}
          </div>
        )}
      </motion.div>
    </div>,
    document.body
  );
};
export default TrivaModal;
