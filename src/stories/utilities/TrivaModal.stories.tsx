import { Meta, StoryObj } from "@storybook/react";
import TUIModal from "../../components/tui-modal/TUIModal";
import {
  ArrowDownward,
  ArrowLeft,
  ArrowRight,
  ArrowUpward,
} from "@mui/icons-material";

const meta: Meta<typeof TUIModal> = {
  title: "Utilities/TUIModal",
  component: TUIModal,
  argTypes: {
    appTheme: {
      options: ["default", "light", "dark"],
      control: { type: "select" },
    },
    onClose: { action: "closed" },
  },
};
export default meta;
type Story = StoryObj<typeof TUIModal>;

export const ModalOverview: Story = {
  args: {
    appTheme: "dark",
    children: <h2>Test TUIModal!</h2>,
  },
};
