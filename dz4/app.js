const btn = document.querySelector('.btn');
const nameElements = document.querySelectorAll('.name');
const ageElements = document.querySelectorAll('.ageElement');

btn.addEventListener('click', function() {
    const axar = new XMLHttpRequest();
    axar.onreadystatechange = function() {
        if (axar.readyState === 4 && axar.status === 200) {
            const data = JSON.parse(axar.responseText);
            for (let i = 0; i < data.length; i++) {
                nameElements[i].textContent = data[i].name;
                ageElements[i].textContent = data[i].age;
            }
        }
    };
    axar.open('GET', 'setting.json', true);
    axar.send();
});
