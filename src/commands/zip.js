import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';

export const decompress = async () => {
  const gzip = zlib.createUnzip();

  const out = fs.createReadStream('src/zip/files/archive.gz');
  const inp = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  pipeline(inp, gzip, out, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

export const compress = async (pathToFile, pathToDestination) => {
  const gzip = zlib.createGzip();

  const inp = fs.createReadStream(pathToFile);
  const out = fs.createWriteStream(pathToDestination);
  pipeline(inp, gzip, out, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};
