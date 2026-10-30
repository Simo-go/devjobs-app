import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintReact from "@eslint-react/eslint-plugin";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";
import pluginQuery from "@tanstack/eslint-plugin-query";

import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintReact.configs.recommended,
      eslintPluginTailwindcss.configs.recommended,
      ...pluginQuery.configs["flat/recommended"],
    ],
    rules: {
      "no-unused-vars": "warn",
      "tailwindcss/no-custom-classname": "off",
      // "react-refresh/only-export-components": "off",
    },
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/index.css",
      },
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
]);
