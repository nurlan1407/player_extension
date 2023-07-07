import path from "path";
import {buildWebpackConfig} from "./config/build/BuildWebpackConfig";


const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'src','public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}
const mode = 'development';
const PORT = 3000;
const isDev = true;
export default buildWebpackConfig(
    {
        paths: paths,
        mode: mode,
        isDev: isDev,
        port: PORT
    }
)