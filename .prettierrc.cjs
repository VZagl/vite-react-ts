module.exports = {
	// 0 = off, 1 = warn, 2 = error
	// trailingComma: 'es5',
	// singleQuote: false,
	// jsxSingleQuote: true,
	// arrowParens: 'always',
	maxLen: ['warn', 140, 2],
	tabWidth: 2,
	useTabs: true,
	// semi: true,
	// linebreakStyle: ['off', 'windows'],
	plugins: [
		'prettier-plugin-organize-imports',
		'prettier-plugin-organize-attributes',
		'prettier-plugin-css-order',
	],
	// htmlWhitespaceSensitivity: 'css',
};
