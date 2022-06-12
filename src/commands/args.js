export const parseArgs = () => {
  const args = [];
  const temp = process.argv.slice(2);

  for (let i in temp) {
    temp[i].startsWith('--') ? args.push(temp[i]) : (args[args.length - 1] += ` is ${temp[i]}`);
  }

  args.forEach((element) => {
    console.log(element);
  });
};

parseArgs();
