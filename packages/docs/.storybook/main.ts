import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from "path"; 

const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  async viteFinal(config, { configType }) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@ignite-ui/tokens': resolve('../tokens/dist/index'),
        '@ignite-ui/react': resolve('../react/dist/index'),
      },
    };

    if (configType === "PRODUCTION") {
      config.base = "/Design-System/";
    }
    
    return config;
  }
};

export default config;