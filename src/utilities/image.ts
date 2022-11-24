import * as pathModule from './paths';
const sharp = require('sharp');
const fs = require('fs');

async function createImg(filename: string, width: number, height: number) {
  try {
    const img = await sharp(pathModule.imgFullPath + '/' + filename + '.jpg')
      .jpeg()
      .resize(width, height)
      .toBuffer();
    fs.writeFileSync(
      pathModule.imgThumbPath + '/' + filename + '_thumb(' + width + 'x' + height + ').jpg',
      img
    );
    console.log('cache created');
  } catch (error) {
    console.log(error);
  }
}

export {createImg};
