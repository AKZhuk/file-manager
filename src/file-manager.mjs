import { stdin, stdout } from 'process';
import readline from 'readline';
import { homedir } from 'os';
import { cd, list, up } from './commands/navigation.mjs';
import { getUserName, parseArgs } from './helpers.mjs';
import { compress, decompress } from './commands/zip.js';
import { add, cat, copy, move, remove } from './commands/fs.mjs';
import { calculateHash } from './commands/hash.mjs';
import { printOsInfo } from './commands/os.mjs';
import { rename } from 'fs/promises';

export const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

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
  '.exit': () => rl.close(),
};

const messages = {
  error: `Operation failed\r\n`,
  welcome: `Welcome to the File Manager,${getUserName()} \r\n`,
  thanks: `Thank you for using File Manager, ${getUserName()}! \r\n`,
  directory: `\r\nYou are currently in`,
};

const FileManager = () => {
  process.chdir(homedir());
  console.log(messages.welcome);
  rl.prompt(true);

  rl.on('line', (line, ...rest) => {
    const [command, ...args] = parseArgs(line);

    if (commands.hasOwnProperty(command)) {
      commands[command](...args);
      console.log(`${messages.directory} ${process.cwd()}`);
    } else if (!messages.hasOwnProperty(line)) {
      console.log('invalid input\r\n');
    }
  });

  rl.on('close', () => {
    console.log(messages.thanks);
  });
};

FileManager();
