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

    "no-console": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
    "no-unused-vars": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-no-constructed-context-values": "off",
    "no-shadow": "off",
    "react/prop-types": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/button-has-type": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "global-require": "off",
    "react-refresh/only-export-components": "off",
    "consistent-return": "off",
    "array-callback-return": "off",
    "react/no-array-index-key": "off",
    radix: "off",
    "no-use-before-define": "off",
    "react-hooks/rules-of-hooks": "off",
  },
};
