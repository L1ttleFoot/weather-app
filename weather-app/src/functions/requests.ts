
const apiKey = 'c164ef80256768fc45b373c2603d08a4'

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const fetchData = async () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

const fetchData1 = async () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=52.17&lon=104.18&appid=${apiKey}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

export {fetchData, fetchData1}