module.exports = {
    entry: "./entry.js",
    output: {
        path: "/",
        filename: "bundle.js"
    },
    module: {
      loaders: [
        {
         test: /.jsx?$/,
         loader: 'babel-loader',
         exclude: /node_modules/,
         query: {
           presets: ['es2015', 'react']
         }
       }
      ]
    },
    devServer: {
      historyApiFallback: true
   }
};
