import { forwardRef } from "react";
import "./TUITextField.css";
import { TUITextFieldProps } from "./types";

const TUITextField = forwardRef((props: TUITextFieldProps, ref: any) => {
  const {
    label,
    type = "text",
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
    ...rest
  } = props || {};
  const isError: boolean = errorMessage !== "";

  return (
    <div
      id={id}
      className={`TUIText_field__container ${className} ${
        isError ? "TUIText__error" : ""
      } 
      ${fullWidth ? "TUIText__fullWidth" : ""}`}
      data-testid={dataTestId || "tui-text-field"}
    >
      <label>
        {label}
        {isRequired && <span>&nbsp;*</span>}
      </label>
      {helperText && <span className="helper__text">{helperText}</span>}
      <input
        ref={ref}
        {...inputProps}
        type={type}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && <span className="error__msg">{errorMessage}</span>}
    </div>
  );
});
export default TUITextField;
