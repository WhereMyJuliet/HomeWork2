//Work №1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\b[A-Za-z0-9_%+-]+@gmail\.com\b/;

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Вы успешно зарегестрированы!'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Вы ввели неверный Gmail.' +
                                ' Убедитесь что вы написали все верно.'
        gmailResult.style.color = 'red'
    }
}

//Work №2
const childBlock = document.querySelector('.child_block');

function moveToPoint(pointX, pointY, delay) {
    childBlock.style.transform = `translate(${pointX}px, ${pointY}px)`;
    setTimeout(() => {
        if (pointX === 448 && pointY === 0) {
            moveToPoint(448, 448, 2000);
        } else if (pointX === 448 && pointY === 448) {
            moveToPoint(0, 448, 2000);
        } else if (pointX === 0 && pointY === 448) {
            moveToPoint(0, 0, 2000);
        } else if (pointX === 0 && pointY === 0) {
            moveToPoint(448, 0, 2000);
        }
    }, delay);
}

// Начало анимации
moveToPoint(0, 0, 2000);
