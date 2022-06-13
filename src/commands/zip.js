import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';
import { printError } from '../helpers.mjs';

export const decompress = async (pathToFile, pathToDestination = './decompree.txt') => {
  const gzip = zlib.createUnzip();

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

export const compress = async (pathToFile, pathToDestination = './archive.gzip') => {
  const gzip = zlib.createGzip();

  const inp = fs.createReadStream(pathToFile);
  const out = fs.createWriteStream(pathToDestination);
  pipeline(inp, gzip, out, (err) => {
    if (err) {
      printError();
    }
  });
};
