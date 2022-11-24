import path from "path";

let srcPath = process.cwd();
let imgFullPath = path.resolve(srcPath + '/images/full/');
let imgThumbPath = path.resolve(srcPath + '/images/thumb/');

export {
    srcPath,
    imgFullPath,
    imgThumbPath
}