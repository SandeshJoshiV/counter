// set initial count
let count = 0;
// select value and button
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
      value.style.color = '';
    } else {
      count = 0;
      value.style.color = '';
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = 'hsl(209, 61%, 16%)';
    }
    value.textContent = count;
  });
});
