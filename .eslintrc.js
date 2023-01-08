module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
		"react-native/react-native": true,
		"jest/globals": true,
	},
	plugins: ["react", "react-native", "@typescript-eslint"],
	extends: [
		"plugin:react/recommended",
		"prettier",
		"eslint:recommended",
		"plugin:jest/recommended",
		"plugin:@typescript-eslint/recommended",
		"@react-native-community",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
		tsconfigRootDir: __dirname,
		project: ["./tsconfig.json"],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				// "@typescript-eslint/no-shadow": ["error"],
				"no-shadow": "off",
				"no-undef": "off",
			},
		},
	],
	ignorePatterns: ["!.*", "dist", "node_modules", "*.eslintrc.js"],
	rules: {
		indent: [
			"error",
			"tab",
			{
				SwitchCase: 1,
				ignoredNodes: ["ConditionalExpression"],
			},
		],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		// "no-console": ["error"],
		// "no-unused-vars": ["error", { vars: "all" }],
		"comma-dangle": 0,
		// "react/jsx-uses-vars": 1,
		"react/display-name": 1,
		// "no-unused-vars": "warn",
		"no-console": 1,
		"no-unexpected-multiline": "warn",
		"@typescript-eslint/strict-boolean-expressions": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-floating-promises": 0,
		"@typescript-eslint/consistent-type-definitions": 0,
		"no-return-assign": 0,
		"operator-linebreak": 0,
		"react/jsx-tag-spacing": 2,
		"react/prop-types": 0,
		"react/display-name": 0,
		"@typescript-eslint/return-await": 0,
	},

	settings: {
		react: {
			version: "detect",
		},
	},
};
