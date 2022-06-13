import fs from 'fs';
import { homedir } from 'os';
import { printError } from '../helpers.mjs';

export const up = () => {
  if (homedir() !== process.cwd()) process.chdir('../');
};

export const cd = (args) => {
  try {
    process.chdir(args[0]);
  } catch (e) {
    printError();
  }
};

export const list = () => {
  if (!fs.existsSync(process.cwd())) printError();
  const files = fs.readdirSync(process.cwd(), { withFileTypes: true });
  files.forEach((file) => console.log(file.name));
};
