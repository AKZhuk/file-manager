import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';
import { printError } from '../helpers.mjs';

export const decompress = async (pathToFile, pathToDestination = './decompress.txt') => {
  const gzip = zlib.createBrotliDecompress();

  try {
    const out = fs.createReadStream(pathToFile);
    const inp = fs.createWriteStream(pathToDestination);

    pipeline(inp, gzip, out, (err) => {
      if (err) {
        printError();
      }
    });
  } catch (error) {
    printError();
  }
};

export const compress = async (pathToFile, pathToDestination = './archive.txt.br') => {
  const gzip = zlib.createBrotliCompress();

  const inp = fs.createReadStream(pathToFile);
  const out = fs.createWriteStream(pathToDestination);
  pipeline(inp, gzip, out, (err) => {
    if (err) {
      printError();
    }
  });
};
