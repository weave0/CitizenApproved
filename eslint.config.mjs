import js from "@eslint/js";

export default [
  {
    ...js.configs.recommended,
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      "scripts/**",
    ],
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];
