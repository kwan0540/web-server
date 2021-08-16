const weatherform = document.querySelector('form')
const inputbox = document.querySelector('input')
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = inputbox.value
    fetch(`http://localhost:3000/weather?address=${location}`).then(response => response.json()).then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
            message1.textContent= data.forecast
            message2.textContent = data.location
        }
    })
    console.log('testing')
    console.log(location)
})