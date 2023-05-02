let count = 3;

const timer = setInterval(() => {
  console.log(count);
  count--;

  if (count === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
