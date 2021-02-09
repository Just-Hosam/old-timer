let times = [3, 5, 9, 10, 15];
let i = 1;
let test = setInterval(() => {
  if (i === 20) clearInterval(test);
  console.log(i + ' sec');
  if (times.includes(i)) process.stdout.write('\x07');
  i++;
}, 1000);