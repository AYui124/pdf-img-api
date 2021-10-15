'use strict';

const { fromBase64 } = require('pdf2pic');
const { mkdirsSync, readFileSync } = require('fs-extra');
const rimraf = require('rimraf');
const outputDirectory = './output/image';

class PdfHelper {
  async pdfToImage(base64, pageNum = 1, density = 200) {
    const option = {
      density,
      savePath: outputDirectory,
      saveFilename: Date.now(),
    };
    // 先重建文件夹
    rimraf.sync(outputDirectory);
    mkdirsSync(outputDirectory);

    const converter = fromBase64(base64, option);
    const result = await converter(pageNum);
    console.log(result);
    return readFileSync(result.path, 'base64');
  }
}

module.exports = PdfHelper;
