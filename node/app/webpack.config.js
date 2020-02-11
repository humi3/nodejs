const path = require('path');

module.exports = {
    mode: "development",
    // エントリーポイントの設定
    entry: './src/main.ts',
    // ビルド後、'./dist/my-bundle.js'というbundleファイルを生成する
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build_test.js'
    },
    target: 'node',
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader'
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: ['.ts',
            '.js'],
        modules: ['node_modules']
    }
};