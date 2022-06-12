import fs from 'fs';
import { homedir } from 'os';

export const up = () => {
  if (homedir() !== process.cwd()) process.chdir('../');
};

export const cd = (args) => {
  try {
    process.chdir(args[0]);
  } catch (e) {
    console.log('erorr occured');
  }
};

export const list = () => {
  if (!fs.existsSync(process.cwd())) console.log('erorr occured');
  const files = fs.readdirSync(process.cwd(), { withFileTypes: true });
  files.forEach((file) => console.log(file.name));
};
