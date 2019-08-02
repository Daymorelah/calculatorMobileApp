module.exports = {
  root: true,
  extends: "airbnb",
  parser: "babel-eslint",
  plugins: [
    "react",
    "import",
    "react-native",
  ],
  env: {
    es6: true
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  rules: {
    "max-len": [1, 80, 2],
    "one-var": 0,
    "one-var-declaration-per-line": 0,
    "import/no-named-as-default": 0,
    "new-cap": 0,
    "consistent-return": 0,
    "no-param-reassign": 0,
    "comma-dangle": 0,
    "curly": ["error", "multi-line"],
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "import/no-unresolved": [2, { "commonjs": true , "amd": true}],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2
  },
};
