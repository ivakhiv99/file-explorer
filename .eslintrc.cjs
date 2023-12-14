module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
		'plugin:styled-components/recommended',
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'react',
		'react-hooks',
		'@typescript-eslint',
		'prettier',
		'styled-components',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		'prettier/prettier': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
