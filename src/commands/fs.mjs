import fs from 'fs';
import path from 'path';
import { printError } from '../helpers.mjs';

export const cat = async (path) => {
  if (fs.existsSync(path)) {
    fs.readFile(path, 'utf8', (err, data) => console.log(data));
  } else {
    printError();
  }
};

export const add = async (fileName) => {
  fs.existsSync(`${process.cwd()}/${fileName}`) && printError();
  fs.writeFile(`${process.cwd()}/${fileName}`, '', (err) => {
    err && printError();
  });
};

export const remove = async (path) => {
  if (fs.existsSync(path)) {
    fs.rm(path, (err) => err && printError());
  } else {
    printError();
  }
};

export const rename = async (pathToFile, newFilename) => {
  if (fs.existsSync(pathToFile)) {
    fs.rename(pathToFile, newFilename, (err) => {
      err && printError();
    });
  } else printError();
};

export const copy = async (pathToFile, pathToNewDirectory) => {
  const ext = path.extname(pathToFile);
  const newPath = pathToNewDirectory.includes(ext) ? pathToNewDirectory : `${pathToNewDirectory}/newFile${ext}`;
  if (fs.existsSync(pathToFile)) {
    fs.copyFile(pathToFile, newPath, (err) => err && printError());
  } else printError();
};

export const move = (pathToFile, pathToNewDirectory) => {
  copy(pathToFile, pathToNewDirectory);
  remove(pathToFile);
};
