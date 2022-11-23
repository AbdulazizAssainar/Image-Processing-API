import path from "path";
import createImg from "../../utilities/image";


var fs = require('fs');
const Fs = require('@supercharge/fs');

let filesLength: number;
let fullPath = '../../../images/full';
let thumbPath = '../../../images/thumb';
let fileName = 'encenadaport';
let width = 200;
let height = 100;

function cleanTest() {
  try {
    fs.unlinkSync(path.resolve('./images/thumb/'+fileName+'_thumb('+width+'x'+height+')'+'.jpg'));
  } catch {}
}

describe('Test images', () => {
    it('check createImg function', async () => {
      cleanTest(); // remove test file if exists
      await createImg(fileName, width, height);
      const isEmptyDir = await Fs.isEmptyDir(thumbPath);
      process.on('beforeExit', () => {
        expect(isEmptyDir).toBeFalse();
        cleanTest(); // remove test file if exists
      });
    });
});
