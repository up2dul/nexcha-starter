module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(js|cjs|mjs|ts|tsx)': ['pnpm eslint', 'pnpm prettier --w'],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': 'pnpm prettier --w',
};
