/** @typedef { import('@payfit/pfx-bundler').BundlerConfig } BundlerConfig */
/** @type {BundlerConfig} */
module.exports = {
	compiler: 'typescript',
	entryFile: 'src/app/index.tsx',
	indexFile: 'src/app/index.html',
	inlineHtmlScripts: ['var globalVar = "hello"'],
	performance: { maxAssetSize: 100000000000, maxEntrypointSize: 100000000000 },

	templateConfig: {
		htmlFragmentsBodyBottom: [
			{
				content: 'console.log("hello")',
				type: 'script'
			}
		]
	}
};
