/** @type { import("@types/eslint").Linter.BaseConfig } */
module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		/* 📚 JSdoc */
		'plugin:jsdoc/recommended',
		/* 🎨 Prettier - Needs to be last so it can override other configs */
		'plugin:prettier/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json', './tsconfig.eslint.json']
	},
	plugins: ['@typescript-eslint', 'jsdoc', 'prettier'],
	rules: {
		// * 🔗 Imports
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
				disallowTypeAnnotations: true
			}
		],
		'sort-imports': [
			'error',
			{
				ignoreCase: false
			}
		],
		// * 📚 JSdoc
		'jsdoc/require-asterisk-prefix': ['error', 'never']
	}
}
