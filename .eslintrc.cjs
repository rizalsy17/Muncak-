module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "18.2",
    },
  },
  plugins: ["react-refresh", "prettier"],
  rules: {
    "linebreak-style": "off",
    "no-alert": "off",
    "no-underscore-dangle": "off",
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
    // Aturan tambahan yang diminta
    "no-console": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": "off", // Menonaktifkan no-unused-vars
    "jsx-a11y/img-redundant-alt": "off", // Menonaktifkan jsx-a11y/img-redundant-alt
    "jsx-a11y/label-has-associated-control": "off", // Menonaktifkan jsx-a11y/label-has-associated-control
    "react/jsx-no-constructed-context-values": "off", // Menonaktifkan react/jsx-no-constructed-context-values
    "no-shadow": "off", // Menonaktifkan no-shadow
    "react/prop-types": "off", // Menonaktifkan react/prop-types
    "jsx-a11y/control-has-associated-label": "off", // Menonaktifkan jsx-a11y/control-has-associated-label
    "react/button-has-type": "off", // Menonaktifkan react/button-has-type
    "jsx-a11y/anchor-is-valid": "off", // Menonaktifkan jsx-a11y/anchor-is-valid
  },
};
