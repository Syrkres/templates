
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
> Temperature<br><span class='hot'>Hotter than normal</span>
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

async function WeatherGenerator(tp,  passedLayout, passedSeason, passedDaily, passedDailyImg, passedDailyWind, passedTemp, passedNightly, passedNightlyImg, passedNightlyWind) {
/*
    seasonWeather: "Rainy",
    seasonWeatherImage: "rainyNight.png",
    seasonWind: "Light",
    seasonTemperature: "temperatureCold.png",
    seasonTemperatureChangeClass: 'normal',
    seasonTemperatureChange: "Normal",
*/
      var layout="oRPG-Weather";
      var nightWeather = "Night: ";
      var nightWind = "Wind: ";
      if (passedLayout == 2) {
        layout="oRPG-WeatherVertical";
        nightWeather = "Night: ";
        nightWind = "";
      }
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
    const generatedOutput = "> [!" + layout + "]" +
        "\n> \n> ![[" + passedDailyImg + ".png]]" +
        "\n> \n> Season: " + passedSeason +
        "\n> \n> " + passedDaily +
        "\n> \n> Wind: " + passedDailyWind +
        "\n> \n> Temperature" +
        "\n> \n> <span class='" + tempClass + "'>" + tempInfo + "</span>" +
        "\n> \n> ![[" + tempImg + "]]" +
        "\n> \n> &nbsp;" +
        "\n> \n> " + nightWeather + passedNightly +
        "\n> \n> " + nightWind + passedNightlyWind +
        "\n> \n> ![[" + passedNightlyImg + ".png]]" +
        "\n>";

    return generatedOutput;
}

module.exports = WeatherGenerator
