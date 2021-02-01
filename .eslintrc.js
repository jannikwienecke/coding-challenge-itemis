module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:react-hooks/recommended",
    // "eslint:recommended",
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/eslint-recommended",
    // "plugin:@typescript-eslint/recommended"
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "16",
    },
  },
  rules: {
    "space-before-function-paren": 0,
    "react/prop-types": 0,
    "react/jsx-handler-names": 0,
    "react/no-unused-prop-types": 0,
    "import/export": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
  },
  overrides: [
    {
      files: ["**/*.test.ts", "**/*.test.tsx"],
      env: {
        jest: true,
        browser: true,
        commonjs: true,
      },
    },
  ],
  ignorePatterns: ["**/*.d.ts"],
}
