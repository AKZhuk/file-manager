import { printError } from '../helpers.mjs';
import { homedir, userInfo, cpus, arch, EOL } from 'os';

export const printOsInfo = (arg) => {
  switch (arg) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--cpus':
      console.log('Total amount:' + cpus().length + ', ' + cpus()[0].model);
      break;
    case '--homedir':
      console.log(homedir());
      break;
    case '--username':
      console.log(userInfo().username);
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      printError();
      break;
  }
};
