module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    eqeqeq: "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "require-await": "off",
    "no-undef": "off",
    "vue/order-in-components": "off",
    "vue/no-unused-components": "off",
    "no-unreachable": "off",
    "vue/return-in-computed-property": "off",
    "no-dupe-keys": "off",
    "node/no-deprecated-api": "off",
    "no-sequences": "off",
    "no-unused-expressions": "off",
    "import/order": "off",
    "camelcase": "off",
    "vue/no-template-shadow": "off",
    "object-shorthand": "off",
    "prefer-const": "off",
    "no-useless-catch": "off",
    "no-unneeded-ternary": "off",
    "no-return-assign": "off",
    "no-useless-return": "off",
    "no-var": "off",
    "vue/prop-name-casing": "off",
    "prettier/prettier": ["off", { semi: false }]
  }
};
