import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "Pixel XL",
    },
    a11y: {
      // Optional selector to inspect
      element: "body",
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: "autocomplete-valid",
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: "image-alt",
            enabled: false,
          },
        ],
      },
      options: {},
    },
    options: {
      storyShort: {
        method: "alphabetical",
        order: ["*"],
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    globals: {
      a11y: {
        // Optional flag to prevent the automatic check
        manual: true,
      },
    },
  },
};

export default preview;
