const path = require('path')

module.exports = {
	mode: "development",
	entry: {
		'bundle': './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
	},
	watch: true
}

// module.exports = {
// 	mode: "development",
// 	entry: {
// 		'bundle': './playgrounds/backEnd/src/index.js',
// 		'bundle-auth': './playgrounds/backEnd/src/auth.js',
// 	},
// 	output: {
// 		path: path.resolve(__dirname, './playgrounds/backEnd/dist'),
// 		filename: '[name].js',
// 	},
// 	watch: true
// }


