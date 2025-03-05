import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { TUISearchProps } from "./types";
import "./TUISearch.css";

const TUISearch: React.FC<TUISearchProps> = ({ onSearch }) => {
  const [userInput, setUserInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(userInput);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [userInput]);

  return (
    <div className="TUISearch_root">
      <SearchIcon className="UISearch__icon" />
      <input
        className="TUISearch_input"
        value={userInput}
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Search"
      />

      {userInput && (
        <ClearIcon
          className="TUISearch__clear"
          onClick={() => setUserInput("")}
        />
      )}
    </div>
  );
};
export default TUISearch;
