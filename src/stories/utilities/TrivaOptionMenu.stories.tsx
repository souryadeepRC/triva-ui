import { Meta, StoryObj } from "@storybook/react";
import TrivaOptionMenu from "../../components/triva-option-menu/TrivaOptionMenu";
import { Settings, Tune, Delete } from "@mui/icons-material";
import { fn } from "@storybook/test";

const meta: Meta<typeof TrivaOptionMenu> = {
  title: "Utilities/TrivaOptionMenu",
  tags: ["autodocs"],
  component: TrivaOptionMenu,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    position: {
      options: ["bottom-left", "bottom-right"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TrivaOptionMenu>;

export const ThreeDotMenu: Story = {
  name: "Options without icon",
  args: {
    position: "bottom-right",
    actions: [
      {
        id: "username",
        label: "Hello Test",
        onClick: fn,
      },
      {
        id: "profileDetails",
        label: "Profile",
        onClick: fn,
      },
      {
        id: "logout",
        label: "Log Out",
        onClick: fn,
      },
    ],
  },
};

export const SettingsMenu: Story = {
  name: "Options with icon",
  args: {
    MenuIcon: <Settings />,
    position: "bottom-right",
    actions: [
      {
        id: "modify",
        label: "Modify",
        icon: <Tune />,
        onClick: fn,
      },
      {
        id: "delete",
        label: "Delete",
        icon: <Delete />,
        onClick: fn,
      },
    ],
  },
};
