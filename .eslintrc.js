module.exports = {
    root: true,
    env: {
        "node": true
    },
    extends: [
        "plugin:vue/essential", // 必须的
        // "plugin:vue/strongly-recommended", // 强烈推荐的
        // "plugin:vue/recommended", // 推荐的
        "@vue/airbnb", // airbnb 风格代码校验
    ],
    parserOptions: {
        "parser": "babel-eslint"
    },
    rules: {
        "max-len": ["error", 200],
    }
}