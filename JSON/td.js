const dat = fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m')
    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('Error:', error);
    });

const my = {
    name: 'arjun',
    age: 19 ,
    married: false,
    subjects: ['maths', 'physics', 'chemistry']
}
const myJSON = JSON.stringify(my);
console.log(myJSON);
const back = JSON.parse(myJSON);
console.log(back);