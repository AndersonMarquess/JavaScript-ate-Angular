const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

// Verifica se a variável de ambiente chamada NODE_ENV (definado no package.json) possui o valor especificado.
if(process.env.NODE_ENV == 'production') {
    plugins.push(new babiliPlugin());
}

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
    },
    //é o mesmo que: plugins = plugins, no ES6+ quando a chave tem o mesmo nome que o valor ela pode ser omitida.
    plugins
}