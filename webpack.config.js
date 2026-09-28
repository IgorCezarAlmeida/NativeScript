const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// Learn more at https://docs.nativescript.org/webpack
	return webpack.resolveConfig();
};
