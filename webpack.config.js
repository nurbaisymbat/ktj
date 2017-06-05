var config = {
   entry: './src/main.js',

   output: {
      path: __dirname+'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
        {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader",
        exclude: [/node_modules/, /public/]
        },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
