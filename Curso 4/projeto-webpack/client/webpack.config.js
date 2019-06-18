const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

let plugins = [];
// ao fazer o push, ele será usando em ambiente de produção e desenvolvimento
plugins.push(new extractTextPlugin('styles.css'));

//disponibiliza depêndencias em escopo global
plugins.push(new webpack.ProvidePlugin({
    //chave para acessar script - valor com localização do script
    '$': 'jquery/dist/jquery.js',
    'jQuery': 'jquery/dist/jquery.js'
}));

// Separação dos módulos do bundle.js, separando em pequenos pedaços para serem carregados sobre demanda.
plugins.push(new webpack.optimize.CommonsChunkPlugin({
    // identificador.
    'name': 'vendor',
    // nome do arquivo final.
    'filename': 'vendor.bundle.js'
}));

// Verifica se a variável de ambiente chamada NODE_ENV (definado no package.json) possui o valor especificado.
if (process.env.NODE_ENV == 'production') {
    //Melhora a velocidade de processamento dos módulos do webpack com "scope hoisting".
    plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

    plugins.push(new babiliPlugin());
    plugins.push(new optimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
            discardComments: {
                removeAll: true
            }
        },
        canPrint: true
    }));
}

module.exports = {
    // Ponto de entrada, script inicial da aplicação, para resolver os outros.
    entry: {
        app: './app-src/app.js',
        //idenficador (name) declarado no CommonsChuckPlugin.
        vendor: ['jquery', 'bootstrap', 'reflect-metadata']
    },
    output: {
        // Nome do arquivo que será criado na pasta 'dist', especificado abaixo.
        filename: 'bundle.js',
        // Cria o caminho da pasta atual até a pasta 'dist';
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
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
            },
            { //Carregamento do bootstrap
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    // fallback usa style-load caso o extract não funcione.
                    fallback: 'style-loader',
                    // se der certo, usa o css-loader.
                    use: 'css-loader'
                })
                // uso da ! para definir uma ordem de load, da direita para esquerda.
                //loader: 'style-loader!css-loader'
            },
            { // Início das regras de carregamento de fontes do bootstrap
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            } // Fim das regras de carregamento de fontes do bootstrap
        ]
    },
    //é o mesmo que: plugins = plugins, no ES6+ quando a chave tem o mesmo nome que o valor, ela pode ser omitida.
    plugins
}