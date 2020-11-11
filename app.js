const colors = require('colors');
const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Ciudad para obtener el clima',
        demand: true
    }
}).argv;
const di = argv.d;
const d = encodeURI(argv.d);
const request = require('request');
request(`http://api.openweathermap.org/data/2.5/weather?q=${ d }&appid=YOUR_API_KEY_FROM_OPEN_WEATHER_MAP&lang=es&units=metric`, function (error, response, body) {
    if(error)
    {
        console.error('Ha ocurrido un error:', error); // Print the error if one occurred
    }
    else
    {
        if(response.statusCode == 200)
        {
            const data = JSON.parse(body);
            console.log("==============================".green);
            console.log(`El clima de ${ di }`);
            console.log( 'Descripción:' ,data.weather[0].description);
            console.log(`La temperatura es de ${ data.main.temp } grados centígrados`);
            console.log("==============================".green);
        }
        else
        {
            console.log(`No se encontró ${ d } `);
            return;
        }
    }
//   console.log('body:', body); // Print the HTML for the Google homepage.
});