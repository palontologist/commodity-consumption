
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const id = document.getElementById('id').value;
  const alias = document.getElementById('alias').value;

  console.log(`Name: ${name}, ID: ${id}, Alias: ${alias}`);
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
