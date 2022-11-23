var fs = require('fs');
const Fs = require('@supercharge/fs');

let filesLength: number;
let fullPath = '../../../images/full';

describe('Test Index', () => {
  it('check if full/images exists', async () => {
    const isEmptyDir = await Fs.isEmptyDir(fullPath);
    expect(isEmptyDir).toBeFalse();
  });
});
