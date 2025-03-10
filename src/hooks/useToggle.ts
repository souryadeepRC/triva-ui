import { useState } from "react";
type useToggleResponse = [boolean, () => void];

const useToggle = (defaultValue: boolean = false): useToggleResponse => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toggleData = () => {
    setValue((value: boolean) => !value);
  };
  return [value, toggleData];
};
export default useToggle;
