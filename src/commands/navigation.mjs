import fs from 'fs';

export const up = () => {
  process.chdir('../');
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
