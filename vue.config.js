module.exports = {
    runtimeCompiler: true,
    filenameHashing: false,
    outputDir: process.env.NODE_ENV === 'production' ? 'dist/prd' : 'dist/dev',
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/app/wdc/dist/prd'
            : 'app/wdc/dist/dev',
    pages: {
        wdc: 'src/wdc.js'
    },
    chainWebpack: config => {
        config.externals({
	    "jquery": "jQuery"
    	});
        config.output
            .filename(
                process.env.NODE_ENV === 'production'
                    ? 'js/[name].js'
                    : 'js/[name].dev.js'
            );
        config.plugins.delete('hmr');
        config.optimization.delete('splitChunks');
    },
    configureWebpack: {
        devtool: 'source-map'
    }
};
