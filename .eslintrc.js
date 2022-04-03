module.exports = {
    parserOptions: {
        "parser": "@babel/eslint-parser"
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "prettier"
    ],
    rules: {
        "vue/multi-word-component-names": "off",

    }
}
