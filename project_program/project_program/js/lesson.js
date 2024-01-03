//phone checker
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [25793]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else  {
        phoneResult.innerHTML = 'NOT OK'
        phoneResult.style.color = 'red'
    }
}

// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabContentItems = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');
let currentIndex = 0;
let intervalId;

const hideTabContent = () => {
    tabContentBlocks.forEach(tabCard => {
        tabCard.style.display = 'none';
    });
    tabContentItems.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (tabIndex = 0) => {
    tabContentBlocks[tabIndex].style.display = 'block';
    tabContentItems[tabIndex].classList.add('tab_content_item_active');
};

const startSlider = () => {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % tabContentBlocks.length;
        hideTabContent();
        showTabContent(currentIndex);
    }, 3000);
};

const stopSlider = () => {
    clearInterval(intervalId);
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                currentIndex = tabIndex;
                hideTabContent();
                showTabContent(tabIndex);
                stopSlider();
                startSlider();
            }
        });
    }
};

startSlider();

//CONVERTOR



// som.addEventListener('input', (event) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', '../data/converter.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
//
//     xhr.addEventListener('load', () => {
//         const data = JSON.parse(xhr.response)
//         usd.value = (som.value / data.usd).toFixed(2)
//     })
//
// })
//
// usd.addEventListener('input', (event) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open('GET', '../data/converter.json')
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.send()
//
//     xhr.addEventListener('load', () => {
//         const data = JSON.parse(xhr.response)
//         som.value = (usd.value * data.usd).toFixed(2)
//     })
//
// })



//dry
const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const requestData = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "converter.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    return new Promise((resolve, reject) => {
        request.onload = () => {
            const response = JSON.parse(request.responseText)
            resolve(response)
        }
        request.onerror = () => reject(request.statusText)
    })
}
const convert = async (elem, target, rate) => {
    elem.oninput = async () => {
        try {
            const response = await requestData()
            if (elem.value === '') {
                target.value = ''
            } else {
                target.value = (elem.value * response[rate] / response.usd).toFixed(2)
            }
        } catch (error) {
            console.error(error)
        }
    }
}

convert(eur, som, 'eur')
convert(som, usd, 'usd')
convert(som, eur, 'eur')
convert(usd, som, 'usd')

som.oninput = async () => {
    try {
        const response = await requestData()
        if (som.value === '') {
            usd.value = ''
            eur.value = ''
        } else {
            usd.value = (som.value / response.usd).toFixed(2)
            eur.value = (som.value / response.eur).toFixed(2)
        }
    } catch (error) {
        console.error(error)
    }
}