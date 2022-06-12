import { stdin, stdout } from 'process';
import readline from 'readline';
import { homedir } from 'os';
import { cd, list, up } from './commands/navigation.mjs';
import { parseArgs, printDirectory } from './helpers.mjs';
import { compress, decompress } from './commands/zip.js';
import { add, cat, copy, move, remove } from './commands/fs.mjs';
import { calculateHash } from './commands/hash.mjs';
import { printOsInfo } from './commands/os.mjs';
import { rename } from 'fs/promises';

const commands = {
  up: up,
  cd: cd,
  ls: list,
  cat: cat,
  add: add,
  rn: rename,
  cp: copy,
  mv: move,
  rm: remove,
  os: printOsInfo,
  hash: calculateHash,
  compress: compress,
  decompress: decompress,
};

const messages = {
  error: `Operation failed\r\n`,
  welcome: 'Welcome to the File Manager, Username!\r\n',
  thanks: 'Thank you for using File Manager, Username!',
};

export const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const FileManager = () => {
  process.chdir(homedir());
  console.log(messages.welcome);
  rl.prompt(true);

  rl.on('line', (line, ...rest) => {
    const [command, ...args] = parseArgs(line);

    if (commands.hasOwnProperty(command)) {
      commands[command](...args);
      printDirectory();
    }
    // else if (!messages.hasOwnProperty(line)) {
    //   console.log('invalid input\r\n');
    // }
  });

  rl.on('close', () => {
    console.log(messages.thanks);
  });
};

FileManager();
