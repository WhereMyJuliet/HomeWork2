const postContainer = document.querySelector('.block');
const paginationButtons = document.querySelector('.buttons');
const BASE_URL = 'https://jsonplaceholder.typicode.com';
let count = 1;
paginationButtons.addEventListener('click', (event) => {
    const button = event.target;
    if (button.classList.contains('next') && count < 200) {
        count++;
        fetchData(count);
    } else if (button.classList.contains('prev') && count > 1) {
        count--;
        fetchData(count);
    }
});
function fetchData(count) {
    fetch(`${BASE_URL}/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            postContainer.innerHTML = `
        <h2>${data.title}</h2>
        <span>${data.id}</span>
        <h3>${data.completed}</h3>`;});
}