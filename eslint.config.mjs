import js from "@eslint/js";

const sharedGlobals = {
  console: "readonly",
  process: "readonly",
  module: "readonly",
  require: "readonly",
  __dirname: "readonly",
  __filename: "readonly",
  exports: "readonly",
  Buffer: "readonly",
  fetch: "readonly",
  URL: "readonly",
  URLSearchParams: "readonly",
  FormData: "readonly",
  setTimeout: "readonly",
  clearTimeout: "readonly",
  setInterval: "readonly",
  clearInterval: "readonly",
  window: "readonly",
  document: "readonly",
  navigator: "readonly",
  location: "readonly",
  localStorage: "readonly",
  sessionStorage: "readonly",
  requestAnimationFrame: "readonly",
  cancelAnimationFrame: "readonly"
};

export default [
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      globals: sharedGlobals
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }]
    }
  }
];
