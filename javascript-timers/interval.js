const timer = setInterval(() => {
  const $h1 = document.querySelector('.countdown-display');
  $h1.innerHTML--;
  if ($h1.innerHTML === '0') {
    $h1.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
}, 1000);
