const path = require('path');

module.exports = {
    // Ponto de entrada, script inicial da aplicação, para resolver os outros.
    entry: './app-src/app.js',
    output: {
        // Nome do arquivo que será criado na pasta 'dist', especificado abaixo.
        filename: 'bundle.js',
        // Cria o caminho da pasta atual até a pasta 'dist';
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                // tudo que terminar com .js
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}