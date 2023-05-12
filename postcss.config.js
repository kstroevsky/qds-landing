module.exports = {
	plugins: {
		'postcss-flexbugs-fixes': {},
		'postcss-import': {},
		'postcss-css-variables': {},
		'postcss-nested': {},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 1,
			features: {
				'custom-properties': true,
			},
		},
	},
	import: ['index.css'],
	map: {
		inline: false,
		annotation: true,
		sourcesContent: true,
	},
	parser: 'postcss-scss',
	syntax: 'postcss-scss',
	rules: {
		'color-hex-length': 'long',
		'declaration-block-no-duplicate-properties': true,
		'declaration-no-important': true,
		'no-descending-specificity': null,
		'property-no-unknown': true,
		'rule-empty-line-before': ['always', { except: ['first-nested'] }],
		'value-keyword-case': 'lower',
	},
};
