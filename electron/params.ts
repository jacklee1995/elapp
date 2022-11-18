import * as path from "path";

const BASE_DIR = path.resolve(__dirname, '../')
const VUE_DIST_HTML = path.join(path.join(path.join(BASE_DIR, 'vue'), 'dist'), 'index.html')


export {
    BASE_DIR,
    VUE_DIST_HTML
}