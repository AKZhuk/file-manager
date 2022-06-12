import { rl } from './file-manager.mjs';

export const parseArgs = (line) => {
  return line.split(' ');
};

export const getUserName = () => process.argv[2].split('=')[1];

export const printDirectory = () => {
  rl.write(`\r\nYou are currently in ${process.cwd()}\r\n`);
};

export const printError = () => {
  rl.write(`\nOperation failed`);
};
