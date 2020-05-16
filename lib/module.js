import path from 'path';

export default function variate(_moduleOptions) {
    const moduleOptions = Object.assign({}, {
        configPath: '~/variate.json',
    }, this.options.variate, _moduleOptions);
    const config = moduleOptions.configPath ? require(this.nuxt.resolver.resolveAlias(moduleOptions.configPath)) : {};

    const options = Object.assign({}, { config }, moduleOptions);

    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'variate.js',
        options
    });
}
