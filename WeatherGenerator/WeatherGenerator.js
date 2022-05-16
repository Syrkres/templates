const {RULGenerator} = customJS;

/* The following is sample/target output we are looking to generate based on CSS */
const targetOutput = `
> [!oRPG-Weather]
> 
> # Current Weather
> 
> ![[clearSkies.png|Sunny]]
>
> &nbsp;
> 
> Sunny
> 
> Wind: Normal
> 
> &nbsp;
> 
> Night: Cloudy
> 
> Wind: Strong
> 
> ![[cloudyNight.png]]
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

function roll() {
   return Math.floor((Math.random() * 100) + 1);
}

async function WeatherGenerator(tp, passedSeason) {
    var output = "This is weather";
    console.log("Preseason:" + passedSeason);
    if ((Number(passedSeason) < 1) || (Number(passedSeason) > 1)) {
        var temp = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        passedSeason = temp.toString();
    }
    console.log("season:" + passedSeason);
    switch (passedSeason) {
        case "1":
            weather.seasonName = "Spring";
            springWeather(roll(), weather.day, "");
            springWeather(roll(), weather.night, "Night");
            break;
        case "2":
            weather.seasonName = "Summer";
            summerWeather(roll(), weather.day, "");
            summerWeather(roll(), weather.night, "Night");
            break;
        case "3":
            weather.seasonName = "Fall";
            fallWeather(roll(), weather.day, "");
            fallWeather(roll(), weather.night, "Night");
            break;
        case "4":
            weather.seasonName = "Winter";
            winterWeather(roll(), weather.day, "");
            winterWeather(roll(), weather.night, "Night");
            break;
        default:
            weather.seasonName = "No Season Passed";
            winterWeather(roll(), weather.day, "");
            winterWeather(roll(), weather.night, "Night");
    }

    console.log("Weather:")
    console.log(weather);
    const generatedOutput = "> [!oRPG-Weather]" + 
        "\n> \n> # Current Weather" + 
        "\n> \n> ![[" + weather.day.seasonWeatherImage + "]]" + 
        "\n> \n> Season: " + weather.seasonName + 
        "\n> \n> " + weather.day.seasonWeather + 
        "\n> \n> Wind: " + weather.day.seasonWind + 
        "\n> \n> Temperature" + 
        "<br><i class='" + weather.day.seasonTemperatureChangeClass + "'>" + weather.day.seasonTemperatureChange + "</i>" + 
        "\n> \n> ![[" + weather.day.seasonTemperature + "]]" + 
        "\n> \n> &nbsp;" + 
        "\n> \n> Night: " + weather.night.seasonWeather + 
        "\n> \n> Wind: " + weather.night.seasonWind + 
        "\n> \n> ![[" + weather.night.seasonWeatherImage + "]]" + 
        "\n>";


    return generatedOutput;
}

module.exports = WeatherGenerator

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

/* Function which does a  50/50 chance returns true/false */
function hilow() {
    return Math.random() <= 0.5;
}

function springWeather(roll,wObj, night) {
    wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    wObj.seasonWind = RULGenerator.generateRul("WIND"); 
    wObj.seasonTemperature = "temperatureWarm.png";
    wObj.seasonTemperatureChange = "Normal";
    wObj.seasonTemperatureChangeClass = "warm";
    
    var temperature = Math.floor((Math.random() * 100) + 1);
    if (temperature < 30) {
        wObj.seasonTemperature = "temperatureCold.png";
        wObj.seasonTemperatureChange = "Colder than normal";
        wObj.seasonTemperatureChangeClass = "cold";
    } else if (temperature > 80) {
        wObj.seasonTemperature = "temperatureHot.png";
        wObj.seasonTemperatureChange = "Hotter than normal";
        wObj.seasonTemperatureChangeClass = "hot";
    }
    if (inRange(roll, 1, 2)) {
            wObj.seasonWeather = "Thunderstorms";
            if (hilow()) {
                wObj.seasonWeatherImage = "stormy" + night + ".png";
            } else {
                wObj.seasonWeatherImage = "lightning" + night + ".png";
            }
            wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    } else if (inRange(roll, 3, 20)) {
            wObj.seasonWeather = "Rainy";
            wObj.seasonWeatherImage = "rainy" + night + ".png";
    } else if (inRange(roll, 21, 40)) {
            wObj.seasonWeather = "Rain Clouds";
            wObj.seasonWeatherImage = "rainy" + night + ".png";
    } else if (inRange(roll, 41, 35)) {
            wObj.seasonWeather = "Light Clouds";
            wObj.seasonWeatherImage = "partlyCloudy" + night + ".png";
    } else if (inRange(roll, 51, 80)) {
            wObj.seasonWeather = "Clear Skies";
            wObj.seasonWeatherImage = "clearSkies" + night + ".png";
    } else if (inRange(roll, 81, 96)) {
            wObj.seasonWeather = "High Winds";
            wObj.seasonWeatherImage = "windy.png";
            wObj.seasonWind = RULGenerator.generateRul("WINDHIGH"); 
    } else if (inRange(roll, 97, 100)) {
            wObj.seasonWeather = "Hurricane";
            wObj.seasonWeatherImage = "tornado.png";
    }
}

function summerWeather(roll,wObj, night) {
    wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    wObj.seasonWind = RULGenerator.generateRul("WIND"); 
    wObj.seasonTemperature = "temperatureWarm.png";
    wObj.seasonTemperatureChange = "Normal";
    wObj.seasonTemperatureChangeClass = "warm";
    
    var temperature = Math.floor((Math.random() * 100) + 1);
    if (temperature < 30) {
        wObj.seasonTemperature = "temperatureCold.png";
        wObj.seasonTemperatureChange = "Colder than normal";
        wObj.seasonTemperatureChangeClass = "cold";
    } else if (temperature > 80) {
        wObj.seasonTemperature = "temperatureHot.png";
        wObj.seasonTemperatureChange = "Hotter than normal";
        wObj.seasonTemperatureChangeClass = "hot";
    }
    if (inRange(roll, 1, 2)) {
            wObj.seasonWeather = "Thunderstorms";
            if (hilow()) {
                wObj.seasonWeatherImage = "stormy" + night + ".png";
            } else {
                wObj.seasonWeatherImage = "lightning" + night + ".png";
            }
            wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    } else if (inRange(roll, 3, 10)) {
            wObj.seasonWeather = "Rainy";
            wObj.seasonWeatherImage = "rainy" + night + ".png";
    } else if (inRange(roll, 11, 20)) {
            wObj.seasonWeather = "Mostly Clouds";
            wObj.seasonWeatherImage = "mostlyCloudy" + night + ".png";
    } else if (inRange(roll, 21, 35)) {
            wObj.seasonWeather = "Light Clouds";
            wObj.seasonWeatherImage = "partlyCloudy" + night + ".png";
    } else if (inRange(roll, 35, 65)) {
            wObj.seasonWeather = "Clear Skies";
            wObj.seasonWeatherImage = "clearSkies" + night + ".png";
    } else if (inRange(roll, 66, 80)) {
            wObj.seasonWeather = "High Winds";
            wObj.seasonWeatherImage = "windy.png";
            wObj.seasonWind = RULGenerator.generateRul("WINDHIGH"); 
    } else if (inRange(roll, 81, 95)) {
            wObj.seasonWeather = "Scorching Heat";
            wObj.seasonWeatherImage = "clearSkies" + night + ".png";
            wObj.seasonWind = "None";
            wObj.seasonTemperature = "temperatureHot.png";
            wObj.seasonTemperatureChange = "Hotter than normal";
            wObj.seasonTemperatureChangeClass = "hot";
    } else if (inRange(roll, 96, 100)) {
            wObj.seasonWeather = "Hurricane";
            wObj.seasonWeatherImage = "tornado.png";
    }
}

function fallWeather(roll,wObj, night) {
    wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    wObj.seasonWind = RULGenerator.generateRul("WIND"); 
    wObj.seasonTemperature = "temperatureWarm.png";
    wObj.seasonTemperatureChange = "Normal";
    wObj.seasonTemperatureChangeClass = "warm";
    
    var temperature = Math.floor((Math.random() * 100) + 1);
    if (temperature < 30) {
        wObj.seasonTemperature = "temperatureCold.png";
        wObj.seasonTemperatureChange = "Colder than normal";
        wObj.seasonTemperatureChangeClass = "cold";
    } else if (temperature > 70) {
        wObj.seasonTemperature = "temperatureHot.png";
        wObj.seasonTemperatureChange = "Hotter than normal";
        wObj.seasonTemperatureChangeClass = "hot";
    }
    if (inRange(roll, 1, 2)) {
            wObj.seasonWeather = "Thunderstorms";
            if (hilow()) {
                wObj.seasonWeatherImage = "stormy" + night + ".png";
            } else {
                wObj.seasonWeatherImage = "lightning" + night + ".png";
            }
            wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    } else if (inRange(roll, 3, 10)) {
            wObj.seasonWeather = "Mix of Snow/Rain";
            wObj.seasonWeatherImage = "rainSnowShowers" + night + ".png";
            wObj.seasonTemperature = "temperatureHot.png";
            wObj.seasonTemperatureChange = "Warmer than normal";
            wObj.seasonTemperatureChangeClass = "hot";
    } else if (inRange(roll, 11, 20)) {
            wObj.seasonWeather = "Heavy Clouds";
            wObj.seasonWeatherImage = "cloudyStorm" + night + ".png";
    } else if (inRange(roll, 21, 50)) {
            wObj.seasonWeather = "Light Clouds";
            wObj.seasonWeatherImage = "mostlyCloudy" + night + ".png";
    } else if (inRange(roll, 51, 65)) {
            wObj.seasonWeather = "Clear Skies";
            wObj.seasonWeatherImage = "clearSkies" + night + ".png";
    } else if (inRange(roll, 66, 95)) {
            wObj.seasonWeather = "High Winds";
            wObj.seasonWeatherImage = "windy.png";
            wObj.seasonWind = RULGenerator.generateRul("WINDHIGH"); 
    } else if (inRange(roll, 96, 100)) {
            wObj.seasonWeather = "Hurricane";
            wObj.seasonWeatherImage = "tornado.png";
    }
    
}

function winterWeather(roll,wObj, night) {
    wObj.seasonWind =  RULGenerator.generateRul("WIND"); 
    wObj.seasonWind = RULGenerator.generateRul("WIND"); 
    wObj.seasonTemperature = "temperatureWarm.png";
    wObj.seasonTemperatureChange = "Normal";
    wObj.seasonTemperatureChangeClass = "warm";
    
    var temperature = Math.floor((Math.random() * 100) + 1);
    if (temperature < 30) {
        wObj.seasonTemperature = "temperatureCold.png";
        wObj.seasonTemperatureChange = "Colder than normal";
        wObj.seasonTemperatureChangeClass = "cold";
    } else if (temperature > 70) {
        wObj.seasonTemperature = "temperatureHot.png";
        wObj.seasonTemperatureChange = "Warmer than normal";
        wObj.seasonTemperatureChangeClass = "hot";
    }
    if (roll == 1) {
            wObj.seasonWeather = "Blizzard";
            wObj.seasonWeatherImage = "snow.png";
            wObj.seasonWind =  RULGenerator.generateRul("WINDBLIZZARD"); 
    } else if (inRange(roll, 2, 20)) {
            wObj.seasonWeather = "Mix of Snow/Rain";
            wObj.seasonWeatherImage = "rainSnowShowers" + night + ".png";
            wObj.seasonTemperature = "temperatureHot.png";
            wObj.seasonTemperatureChange = "Warmer than normal";
            wObj.seasonTemperatureChangeClass = "hot";
    } else if (inRange(roll, 21, 30)) {
            wObj.seasonWeather = "Freezing Cold";
            wObj.seasonWeatherImage = "snow" + night + ".png";
    } else if (inRange(roll, 31, 40)) {
            wObj.seasonWeather = "Heavy Clouds";
            wObj.seasonWeatherImage = "cloudyNight" + night + ".png";
    } else if (inRange(roll, 41, 70)) {
            wObj.seasonWeather = "Light Clouds";
            wObj.seasonWeatherImage = "partlyCloudy.png";
    } else if (inRange(roll, 71, 95)) {
            wObj.seasonWeather = "Clear Skies";
            wObj.seasonWeatherImage = "clearSkies" + night + ".png";
    } else if (inRange(roll, 96, 100)) {
            wObj.seasonWeather = "Strange Phenomena";
            wObj.seasonWeatherImage = "stormy" + night + ".png";
    }

}