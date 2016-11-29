const path = require("path");
var stylesPath = path.resolve(__dirname, 'less', 'eksempel.less');
var mainPath = path.resolve(__dirname, 'index.js');

module.exports = {
    entry: [mainPath, stylesPath],
    output: {
        filename: 'bundle.js',
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }]
    }
}