import webpack from "webpack";
import {BuildOptions} from "./types/BuildOptions";
import {buildLoaders} from "./BuildLoaders";
import {buildPlugins} from "./BuildPlugins";
import {buildResolvers} from "./BuildResolvers";
import {buildDevServer} from "./BuildDevServer";

export const buildWebpackConfig = (buildOptions:BuildOptions):webpack.Configuration =>{
    return {
        mode:buildOptions.mode,
        entry:buildOptions.paths.entry,
        devtool: 'cheap-module-source-map',
        output:{
            path:buildOptions.paths.output,
            filename:'content.js',
        },
        module:{
            rules:buildLoaders(buildOptions)
        },
        resolve: buildResolvers(buildOptions),
        plugins: buildPlugins(buildOptions),
        devServer: buildDevServer(buildOptions)
    }
}