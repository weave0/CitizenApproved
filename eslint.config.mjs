import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "scripts/**",
    ],
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "off", // TypeScript handles this
    },
  },
];
