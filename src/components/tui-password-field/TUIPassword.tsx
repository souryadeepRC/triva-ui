import { memo, useEffect, useRef } from "react";
// library
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
// components
import { RulePopover, RuleProgress } from "./RulePopover";
// hooks
import useToggle from "../../hooks/useToggle";
// types
import { PasswordRule, RuleStatusResponse, TUIPasswordProps } from "./types";
// styles
import "./TUIPassword.css";

const calculateRuleStatus = (
  password: string,
  rules: PasswordRule[] | undefined
): RuleStatusResponse => {
  if (!rules?.length)
    return {
      percentage: 0,
      statuses: [],
    };
  let rulePassCount = 0;
  const ruleStatus = rules?.map((rule: any) => {
    let isPass: boolean = false;

    // Check isValid function, if it exists
    if (rule?.isValid) {
      isPass = rule.isValid(password);
    } // If isValid doesn't exist, check the regex
    else if (rule?.regex && new RegExp(rule?.regex).test(password)) {
      isPass = true;
    }
    // Accumulate the pass count and status
    if (isPass) {
      rulePassCount++;
    }
    return {
      label: rule.label,
      isPass,
    };
  });
  return {
    percentage: (rulePassCount / rules.length) * 100,
    statuses: ruleStatus,
  };
};
const TUIPassword = (props: TUIPasswordProps) => {
  const [isVisible, toggleIsVisible] = useToggle(false);
  const {
    label,
    className = "",
    errorMessage = "",
    helperText = "",
    inputProps,
    dataTestId,
    id,
    value,
    onChange,
    fullWidth,
    isRequired = false,
    rules,
    handleValidity,
    ...rest
  } = props || {};

  const initialRender = useRef(false);
  const { percentage, statuses } = calculateRuleStatus(value, rules);
  const isError: boolean =
    errorMessage !== "" ||
    (!!rules?.length && percentage !== 100 && initialRender.current);

  useEffect(() => {
    initialRender.current = true;
  }, []);
  useEffect(() => {
    if (!rules?.length || !handleValidity) return;
    handleValidity(percentage !== 100);
  }, [percentage, rules]);

  return (
    <div
      id={id}
      className={`TUIPassword_field__container ${className} ${
        isError ? "TUIPassword__error" : ""
      } 
      ${fullWidth ? "TUIPassword__fullWidth" : ""}`}
      data-testid={dataTestId || "tui-text-field"}
    >
      <label>
        {label}
        {isRequired && <strong>&nbsp;*</strong>}

        {rules && <RulePopover statuses={statuses} />}
      </label>
      {helperText && <span className="helper__text">{helperText}</span>}
      <div className="TUIPassword__input">
        <input
          {...inputProps}
          type={isVisible ? "text" : "password"}
          value={value}
          onChange={onChange}
          {...rest}
        />
        <IconButton onClick={toggleIsVisible}>
          {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </div>
      {rules && <RuleProgress percentage={percentage} />}

      {errorMessage && <span className="error__msg">{errorMessage}</span>}
    </div>
  );
};
export default memo(TUIPassword);
