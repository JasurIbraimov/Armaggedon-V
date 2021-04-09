module.exports = {
    "settings": {
        "react": {
          "version": "detect", 
          "flowVersion": "0.53" 
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'airbnb/hooks',
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "prettier/prettier": [
            "error",
            {
                "printWidth": 80,
                "trailingComma": "es5",
                "semi": true,
                "jsxSingleQuote": true,
                "singleQuote": true,
                "useTabs": true,
                "bracketSpacing": true,
                "jsxBracketSameLine": true,
                "tabWidth": 4
            }
        ]
    }
};
