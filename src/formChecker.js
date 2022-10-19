const form = document.querySelector('.contact-form');
const email = document.querySelector('#user-email');
const error = document.querySelector('.volidation-msg');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.innerHTML = '';
    email.classList.add('.fail');
    const msg = document.createTextNode(
      'Kindly make sure that your email characters are in lowercase*',
    );
    error.append(msg);
  } else {
    email.classList.remove('red-border');
    error.innerHTML = '';
  }
});