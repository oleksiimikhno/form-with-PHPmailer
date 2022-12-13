document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const submitButton = form.querySelector('button[type="submit"]');

  const submitForm = (event) => {
    console.log('event: ', event);
    event.preventDefault();
    console.log('event: ', event);

  }

  document.addEventListener('click', () => (event) => submitForm(event));
})