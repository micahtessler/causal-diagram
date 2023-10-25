/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    ignorePatterns: ["post-build.js","karma.conf.js", "e2e/protractor.conf.js", "docs"],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
        "@typescript-eslint/no-explicit-any": "off"
    }
  };