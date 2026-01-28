const config = {
  "*.{js,jsx,ts,tsx,mjs}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml,css}": ["prettier --write"],
};

export default config;
