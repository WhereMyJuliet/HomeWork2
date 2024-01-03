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

// //Work №2
// const childBlock = document.querySelector('.child_block');
//
// function moveToPoint(pointX, pointY, delay) {
//     childBlock.style.transform = `translate(${pointX}px, ${pointY}px)`;
//     setTimeout(() => {
//         if (pointX === 448 && pointY === 0) {
//             moveToPoint(448, 448, 2000);
//         } else if (pointX === 448 && pointY === 448) {
//             moveToPoint(0, 448, 2000);
//         } else if (pointX === 0 && pointY === 448) {
//             moveToPoint(0, 0, 2000);
//         } else if (pointX === 0 && pointY === 0) {
//             moveToPoint(448, 0, 2000);
//         }
//     }, delay);
// }
// x
// // // Начало анимации
// moveToPoint(0, 0, 2000);
// Move block
const childBlock = document.querySelector('.child_block')

const moveSpeedChildBlock = 0.5 //скорость
const  parentBlockWidth = 449 //оличество пикселей передвижения
let positionX = 0// позиция
let positionY = 0// позиция


const moveBlock = () => {
    if (positionX < parentBlockWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        setTimeout(moveBlock, moveSpeedChildBlock);
    } else if (positionX >= parentBlockWidth && positionY < parentBlockWidth) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        setTimeout(moveBlock, moveSpeedChildBlock);
    } else if (positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left =  `${positionX}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    } else if (positionX === 0 && positionY >0 ) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, moveSpeedChildBlock)
    }


    // } else if (positionX > 0 && positionY === parentBlockWidth) {
    //     positionX--;
    //     childBlock.style.left = `${positionX}px`;
    //     setTimeout(moveBlock, moveSpeedChildBlock);
    // } else if (positionX === 0 && positionY > 0) {
    //     positionY--;
    //     childBlock.style.top = `${positionY}px`;
    //     setTimeout(moveBlock, moveSpeedChildBlock);

};

moveBlock();

setTimeout(function() {
    let seconds = 0;
    let intervalId = 100;

    function startTimer() {
        intervalId = setInterval(function() {
            seconds++;
            document.getElementById('secondsS').textContent = seconds;
        }, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
    }

    function resetTimer() {
        seconds = 0;
        clearInterval(intervalId);
        document.getElementById('secondsS').textContent = seconds;
    }

    document.getElementById('start').addEventListener('click', startTimer);
    document.getElementById('stop').addEventListener('click', stopTimer);
    document.getElementById('reset').addEventListener('click', resetTimer);
}, 0);
