const path = require('path');

module.exports = {
    mode: 'development', 
    entry: './src/SegmentDisplay.js',
    output: {
        filename: 'bundle.dev.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
}; 