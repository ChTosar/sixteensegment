const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SegmentDisplay.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        minimize: true,
    },
    devtool: false,
};
