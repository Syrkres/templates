
/* The following is sample/target output we are looking to generate based on CSS */
const targetOutput = `
> [!oRPG-Weather]
> 
> # Current Weather
> 
> ![[clearSkies.png]]
> 
> Season: Spring
> 
> Clear Skies
> 
> Wind:  None 
> 
> Temperature<br><i class='hot'>Hotter than normal</i>
> 
> ![[temperatureHot.png]]
> 
> &nbsp;
> 
> Night: High Winds
> 
> Wind:  Wild 
> 
> ![[windy.png]]
> `;

let weather = {
    season: 1,
    seasonName: "Spring",
    day: {
        seasonWeather: "Sunny",
        seasonWeatherImage: "clearSkies.png",
        seasonWind: "Warm",
        seasonTemperature: "temperatureCold.png",
        seasonTemperatureChangeClass: 'normal',
        seasonTemperatureChange: "Normal",
    },
    night: {
        seasonWeather: "Rainy",
        seasonWeatherImage: "rainyNight.png",
        seasonWind: "Light",
        seasonTemperature: "temperatureCold.png",
        seasonTemperatureChangeClass: 'normal',
        seasonTemperatureChange: "Normal",
    }
}

/* Return random element from Array */
function randomElement (array) {
    return array[Math.floor(Math.random() * array.length)];
}  

function roll() {
   return Math.floor((Math.random() * 100) + 1);
}

async function WeatherGenerator(tp,  passedSeason, passedDaily, passedDailyImg, passedDailyWind, passedTemp, passedNightly, passedNightlyImg, passedNightlyWind) {
/*
    seasonWeather: "Rainy",
    seasonWeatherImage: "rainyNight.png",
    seasonWind: "Light",
    seasonTemperature: "temperatureCold.png",
    seasonTemperatureChangeClass: 'normal',
    seasonTemperatureChange: "Normal",
*/
    var tempInfo, tempClass, tempImg;
    switch (passedTemp) {
        case "Hot":
            tempInfo = "Hotter than Normal";
            tempClass = "hot";
            tempImg = "temperatureHot.png";
            break;
            
        case "Warm":
            tempInfo = "Normal";
            tempClass = "warm";
            tempImg = "temperatureWarm.png";
            break;
            
        case "Cold":
            tempInfo = "Colder than Normal";
            tempClass = "cold";
            tempImg = "temperatureCold.png";
            break;
             
    }
    console.log("Weather:")
    console.log(weather);
    const generatedOutput = "> [!oRPG-Weather]" + 
        "\n> \n> # Current Weather" + 
        "\n> \n> ![[" + passedDailyImg + ".png]]" + 
        "\n> \n> Season: " + passedSeason + 
        "\n> \n> " + passedDaily + 
        "\n> \n> Wind: " + passedDailyWind + 
        "\n> \n> Temperature" + 
        "<br><i class='" + tempClass + "'>" + tempInfo + "</i>" + 
        "\n> \n> ![[" + tempImg + "]]" + 
        "\n> \n> &nbsp;" + 
        "\n> \n> Night: " + passedNightly + 
        "\n> \n> Wind: " + passedNightlyWind + 
        "\n> \n> ![[" + passedNightlyImg + ".png]]" + 
        "\n>";

    return generatedOutput;
}

module.exports = WeatherGenerator

