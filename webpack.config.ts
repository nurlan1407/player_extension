import path from "path";
import {buildWebpackConfig} from "./config/build/BuildWebpackConfig";


const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, "..", "extension"),
    html: path.resolve(__dirname,'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
}
const mode = 'production';
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