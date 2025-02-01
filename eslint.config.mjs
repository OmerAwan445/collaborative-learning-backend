import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["*.ts"], // Apply to all JS and TS files
    languageOptions: {
      globals: globals.node, // Enable Node.js globals
      parser: tseslint.parser, // Use TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig.json
      },
    },
  },
  pluginJs.configs.recommended, // Apply ESLint recommended rules
  ...tseslint.configs.recommended, // Apply TypeScript recommended rules
  {
    rules: {
      "prefer-const": "error", // Enforce using `const` for variables that aren't reassigned
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { allowShortCircuit: true, allowTernary: true }, // Allow short-circuit and ternary expressions
      ],
    },
  },
];