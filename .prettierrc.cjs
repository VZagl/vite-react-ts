module.exports = {
	// 0 = off, 1 = warn, 2 = error
	tabWidth: 2,
	useTabs: true,
	quoteProps: 'as-needed',
	singleQuote: true,
	jsxSingleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	maxLen: ['warn', 140, 2],
	semi: true,
	embeddedLanguageFormatting: 'auto',
	// linebreakStyle: ['off', 'windows'],
	plugins: [
		'prettier-plugin-organize-imports',
		'prettier-plugin-organize-attributes',
		'prettier-plugin-css-order',
	],
	// htmlWhitespaceSensitivity: 'css',
	// attributeGroups: ['^class$', '^(id|name)$', '$DEFAULT', '^aria-'],
	// attributeSort: 'ASC',
};
