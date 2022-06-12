import crypto from 'crypto';
import fs from 'fs';
import { printError } from '../helpers.mjs';

export const calculateHash = async (path) => {
  if (fs.existsSync(path)) {
    const fileBuffer = fs.readFileSync(path);
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
    console.log(hash);
  } else {
    printError();
  }
};
