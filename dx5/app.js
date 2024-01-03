const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')
const requestData = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
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