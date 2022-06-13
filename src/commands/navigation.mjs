import fs from 'fs';
import { homedir } from 'os';
import path from 'path';
import { printError } from '../helpers.mjs';

export const up = () => {
  if (homedir() !== process.cwd()) process.chdir('../');
};

export const cd = (newPath) => {
  const fullPath = path.resolve(process.cwd(), newPath);
  try {
    process.chdir(fullPath);
  } catch (e) {
    printError();
  }
};

export const list = () => {
  if (!fs.existsSync(process.cwd())) printError();
  const files = fs.readdirSync(process.cwd(), { withFileTypes: true });
  files.forEach((file) => console.log(file.name));
};
