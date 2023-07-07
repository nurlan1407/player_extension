import webpack from "webpack";
import {BuildOptions} from "./types/BuildOptions";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
export const buildPlugins = (buildOptions:BuildOptions):webpack.WebpackPluginInstance[] =>{
    return [new HtmlWebpackPlugin({template:buildOptions.paths.html})]
}