import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

// Recriando o __dirname para ambiente ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
* This function is used to resolve the absolute path of a package.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}

const config: StorybookConfig = {
  "stories": [
    "../src/pages/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"
  ],
  "addons": [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
  ],
  "framework": {
    name: getAbsolutePath('@storybook/react-vite') as '@storybook/react-vite',
    options: {}
  },

  async viteFinal(config, { configType }) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@ignite-ui/tokens': resolve(__dirname, '../../tokens/dist/index.mjs'),
        '@ignite-ui/react': resolve(__dirname, '../../react/dist/index.mjs'),
      },
    };

    if (configType === "PRODUCTION") {
      config.base = "/Design-System/"
    }
    
    return config
  }
};

export default config;