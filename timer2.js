let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }

  if(nums.includes(key)) {
    let test = setInterval(() => {
      if (key <= 0) {
        process.stdout.write('\x07');
        clearInterval(test);
        process.exit();
      }
      console.log(key + ' sec');
      key--;
    }, 1000);
  }

  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});
