const joke = document.querySelector('#joke');
const pushButton = document.querySelector('#btn');
const anotherButton = document.querySelector('#anotherBtn');


pushButton.addEventListener('click', generate);
anotherButton.addEventListener('click', generate);

generate();

// A function which fetches data from a dad jokes api and pushes the joke to the joke container.
async function generate() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const response = await fetch('https://icanhazdadjoke.com/', config)

  const data = await response.json()

  joke.innerHTML = data.joke
}
