const modalArgTypes: any = {
  isOpen: {
    description: "Required: boolean for open state",
    control: "boolean",
    table: {
      type: { summary: "boolean" },
      required: true,
    },
  },
  title: {
    description: "Required: Modal title",
    table: {
      type: { summary: `string | React.ReactElement` },
    },
  },
  onClose: {
    description: "Required: Callback triggered when modal is closed",
    action: "closed",
    table: {
      type: { summary: "(event:React.MouseEvent) => void" },
    },
  },

  children: {
    description: "Required: Content of the modal",
    control: { type: "none" },
    table: {
      type: { summary: "React.ReactElement" },
    },
  },
  className: {
    description:
      "Optional: Custom class name for styling the modal. Classname appended at the modal root node",
    control: { type: "none" },
    table: {
      type: { summary: "string" },
    },
  },
  size: {
    description: "Optional:Sizes of the modal",
    options: ["xs", "sm", "md", "lg", "xl"],
    control: { type: "select" },
    defaultValue: "md",
    table: {
      type: { summary: `"xs" | "sm" | "md" | "lg" | "xl"` },
      defaultValue: { summary: "md" },
    },
  },
  appTheme: {
    description: "Optional:Selects the theme of the modal",
    options: ["default", "light", "dark"],
    control: { type: "select" },
    table: {
      type: { summary: `"default" | "light" | "dark"` },
      defaultValue: { summary: "light" },
    },
  },

  showCloseButton: {
    description: "Optional: boolean for open state",
    control: { type: "boolean" },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: true },
    },
  },
  topDivider: {
    description: "Optional: Enable/Disabled modal top divider",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
  },
  bottomDivider: {
    description: "Optional: Enable/Disabled modal bottom divider",
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
  },
  primaryAction: {
    description: "Optional: Modal actions",
    control: { type: "none" },
    table: {
      type: { summary: "React.ReactElement" },
    },
  },
  secondaryAction: {
    description: "Optional: Modal actions",
    control: { type: "none" },
    table: {
      type: { summary: "React.ReactElement" },
    },
  },

  dataTestId: {
    description: "Optional: Test id for modal content",
    control: { type: "none" },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "'triva-modal'" },
    },
  },
  ariaLabelCloseButton: {
    description: "Optional: Custom aria-label for the close button",
    control: { type: "string" },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "'Modal Close Button'" },
    },
  },
  ariaLabelDialog: {
    description:
      "Optional: Custom aria-label for the close button modal information",
    control: { type: "string" },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "'Modal Information'" },
    },
  },
};

export default modalArgTypes;
