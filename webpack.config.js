const
	query = require('querystring'),
	path = require('path'),

	config = require('config'),
	autoprefixer = require('autoprefixer');

const
	output = path.resolve(config.buildDir);

module.exports = {
	entry: './src/index.js',

	output: {
		path: output,
		filename: 'jsv.min.js'
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: config.babel
			},

			{
				test: /\.ss$/,
				loader: 'snakeskin',
				query: config.snakeskin
			},

			{
				test: /\.styl$/,
				loader: `style!css?${query.stringify(config.css)}!postcss!stylus${query.stringify(config.stylus)}`
			},

			{
				test: /\.png$/,
				loader: 'url'
			}
		]
	},

	postcss: () => [autoprefixer]
};
