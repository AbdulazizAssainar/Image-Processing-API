import path from 'path';

const srcPath = process.cwd();
const imgFullPath = path.resolve(srcPath + '/images/full/');
const imgThumbPath = path.resolve(srcPath + '/images/thumb/');

export { srcPath, imgFullPath, imgThumbPath };
