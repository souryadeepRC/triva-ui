import { OptionAction } from "./types";

interface Props {
  actions: OptionAction[];
  onActionClick: (callback: () => void) => (e: React.MouseEvent) => void;
}

const ActionList: React.FC<Props> = ({ actions, onActionClick }) => (
  <ul>
    {actions.map((action) => (
      <li
        key={action.id}
        tabIndex={0}
        role="button"
        onClick={onActionClick(action.onClick)}
      >
        {action.icon}
        {action.label}
      </li>
    ))}
  </ul>
);

export default ActionList;
