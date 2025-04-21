import { Meta, StoryObj } from "@storybook/react";
import TrivaModal from "../../components/triva-modal/TrivaModal";
import { useState } from "react";
import { TrivaModalProps } from "../../components/triva-modal/types";
import modalArgTypes from "../../components/triva-modal/ModalArgTypes";
import {
  Title,
  Description,
  Subtitle,
  Stories,
  ArgTypes,
  Controls,
} from "@storybook/blocks";
import { fn } from "@storybook/test";

const meta: Meta<typeof TrivaModal> = {
  title: "Utilities/TrivaModal",
  component: TrivaModal,
  /* tags: ["autodocs"], */
  args: {
    onClose: fn(),
  },
  /* parameters: {
    componentSubtitle: "A Modal component for better user friendly dialog box",
    docs: {
      page: () => {
        return (
          <>
            <Title />
            <ArgTypes />
          </>
        );
      },
    },
  }, */
  argTypes: modalArgTypes,
};
export default meta;
type Story = StoryObj<typeof TrivaModal>;

const createModalStoryRender =
  (children: React.ReactElement) => (args: TrivaModalProps) => {
    const { isOpen, ...restArgs } = args;
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      restArgs?.onClose?.();
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <button onClick={handleOpen}>Open Modal</button>
        <TrivaModal isOpen={open} {...restArgs} onClose={handleClose}>
          {children}
        </TrivaModal>
      </div>
    );
  };
const ModalContent = (n: number) => {
  return (
    <div>
      {Array.from(Array(n).keys()).map((val) => (
        <h5 key={val} style={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </h5>
      ))}
    </div>
  );
};

export const ModalOverview: Story = {
  render: createModalStoryRender(ModalContent(10)),
  args: {
    size: "md",
    title: "Sample Modal",
    topDivider: true,
    bottomDivider: true,
    primaryAction: <button>Agree</button>,
    secondaryAction: <button>Cancel</button>,
  },
};

export const ModalWithoutAction: Story = {
  render: createModalStoryRender(ModalContent(10)),
  name: "Modal without actions",
  args: {
    size: "md",
    title: "Modal without actions",
    appTheme: "dark",
  },
};
export const ModalWithLessContent: Story = {
  render: createModalStoryRender(ModalContent(1)),
  name: "Modal with less content",
  args: {
    size: "md",
    title: "Modal less content",
    showCloseButton: false,
    appTheme: "dark",
  },
};
