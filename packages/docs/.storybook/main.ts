import type { StorybookConfig } from '@storybook/react-vite';

import path, { dirname } from "path"

import { fileURLToPath } from "url"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
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
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },

  async viteFinal(config, { configType }) {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Isso força o Vite a buscar o código direto na dist sem passar pelo resolver bugado do node_modules
        '@ignite-ui/tokens': path.resolve(__dirname, '../../tokens/dist/index.mjs'),
        '@ignite-ui/react': path.resolve(__dirname, '../../react/dist/index.mjs'),
      },
    };

    if (configType === 'PRODUCTION') {
      config.base = '/Design-System/';
    }
    
    return config;
  },

};
export default config;