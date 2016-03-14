module.exports = {
	buildDir: './dist',

	babel: {
		plugins: [
			'transform-flow-strip-types',
			'transform-es2015-modules-commonjs',
			'transform-decorators-legacy'
		],
		presets: ['es2015', 'stage-0']
	},

	stylus: {},

	css: {},

	snakeskin: {
		pack: true,
		throws: true,
		doctype: 'html'
	}
};
