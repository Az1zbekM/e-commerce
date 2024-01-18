module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier', 'simple-import-sort'], // Add 'simple-import-sort' to the plugins array
  rules: {
    'simple-import-sort/imports': 'error', // Add the rule for sorting imports
  },
};