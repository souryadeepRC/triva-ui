export interface TUIPasswordProps
  extends React.HTMLProps<HTMLInputElement> {
  label: string;
  className?: string;
  errorMessage?: string;
  helperText?: string;
  id?: string;
  fullWidth?: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: object;
  dataTestId?: string;
  isRequired?: boolean;
  rules?: PasswordRule[];
  handleValidity?: (isValid: boolean) => void;
}
export interface RuleStatus {
  label: string;
  isPass: boolean;
}
export interface RuleStatusResponse {
  percentage: number;
  statuses: RuleStatus[];
}
interface PasswordRuleBase {
  label: string;
}

interface PasswordRuleWithValidation extends PasswordRuleBase {
  isValid: (value: string) => boolean;
  regex?: never; // Prevent regex from being used if isValid is present
}

interface PasswordRuleWithRegex extends PasswordRuleBase {
  regex: string;
  isValid?: never; // Prevent isValid from being used if regex is present
}

export type PasswordRule = PasswordRuleWithValidation | PasswordRuleWithRegex;

export interface RuleProgressProps {
  percentage: number;
}
export interface RulePopoverProps {
  statuses: RuleStatus[];
}
