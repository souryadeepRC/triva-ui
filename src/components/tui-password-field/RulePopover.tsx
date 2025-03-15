// library
import { IconButton } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import RuleIcon from "@mui/icons-material/Rule";
// hooks
import useToggle from "../../hooks/useToggle";
// types
import { RulePopoverProps, RuleProgressProps, RuleStatus } from "./types";
// styles
import "./RulePopover.css";

const RulePopover: React.FC<RulePopoverProps> = ({ statuses }) => {
  const [isVisible, togglePopover] = useToggle(false);

  return (
    <div className="TUIPassword_rule_popover__container">
      <IconButton onMouseEnter={togglePopover} onMouseLeave={togglePopover}>
        <RuleIcon />
      </IconButton>
      {isVisible && (
        <div className="TUIPassword_rule_popover__content">
          {statuses.map(({ isPass, label }: RuleStatus, index: any) => {
            return (
              <div className={`password__rule ${isPass ? "pass" : "fail"}`}>
                {isPass ? <DoneIcon /> : <ClearIcon />}
                <span key={index}>{label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const RuleProgress: React.FC<RuleProgressProps> = ({ percentage }) => {
  return (
    <div className="rule__outer">
      <div className="rule__inner" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export { RulePopover, RuleProgress };
