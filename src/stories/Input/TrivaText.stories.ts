import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import TUITextField from "../../components/tui-text-field/TUITextField";

const meta: Meta<typeof TUITextField> = {
  title: "Input/TrivaText",
  component: TUITextField,
  tags: ["autodocs"],
  argTypes: {
    isRequired: [false, true],
  },
  args: {
    onChange: fn(),
  },
  parameters: {
    docs: {
      canvas: { sourceState: "hide" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof TUITextField>;
export const TextOverview: Story = {
  args: {
    label: "Test",
    value: "Hello",
  },
};
export const TextError: Story = {
  args: {
    label: "Username",
    value: "",
    errorMessage: "Username is required",
  },
};
