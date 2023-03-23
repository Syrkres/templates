
/* The following is sample/target output we are looking to generate based on CSS */
const targetOutput = `
> [!oRPG-Weatherm]
>
> # Current Weather
>
> ![[clearSkies.png]]
>
> Clear Skies
>
> Wind:  None
>
> Temperature<br><span class='hot'>Hotter than normal</span>
>
> ![[temperatureHot.png]]
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

async function WeatherGenerator(tp, passedLayout, passedSeason) {
    var output = "This is weather";
    var layout="oRPG-Weatherm-v2";
    var nightWeather = "Night: ";
    var nightWind = "Wind: ";

    //console.log("Layout:" + passedSeason);
    //console.log("Preseason:" + passedSeason);
    if ((Number(passedSeason) < 1) || (Number(passedSeason) > 4)) {
        var temp = Math.floor(Math.random() * (4 - 1 + 1) + 1);
        passedSeason = temp.toString();
    }
    //console.log("season:" + passedSeason);
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

    //console.log("Weather:")
    //console.log(weather);
    const generatedOutput = "> [!" + layout + "]" +
        "\n> \n> ![[" + weather.day.seasonWeatherImage + "]]" +
        "\n> \n> " + weather.day.seasonWeather +
        "\n> \n> Winds" + 
        "\n> \n> " + weather.day.seasonWind + 
        "\n> \n> Temperature" +
        "\n> \n> <span class='" + weather.day.seasonTemperatureChangeClass + "'>" + weather.day.seasonTemperatureChange + "</span>" +
        "\n> \n> ![[" + weather.day.seasonTemperature + "]]" +
        "\n> \n> Season: " + passedSeason +
        "\n> \n> " + nightWeather + weather.night.seasonWeather +
        "\n> \n> " + nightWind + weather.night.seasonWind +
        "\n> \n> ![[" + weather.night.seasonWeatherImage + "]]";

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
    wObj.seasonWind = randomElement(WIND_RULE);
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
            wObj.seasonWind = randomElement(WIND_HIGH);
    } else if (inRange(roll, 97, 100)) {
            wObj.seasonWeather = "Hurricane";
            wObj.seasonWeatherImage = "tornado.png";
    }
}

function summerWeather(roll,wObj, night) {
    wObj.seasonWind = randomElement(WIND_RULE);
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
            wObj.seasonWind = randomElement(WIND_HIGH);
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
    wObj.seasonWind = randomElement(WIND_RULE);
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
            wObj.seasonWind = randomElement(WIND_HIGH);
    } else if (inRange(roll, 96, 100)) {
            wObj.seasonWeather = "Hurricane";
            wObj.seasonWeatherImage = "tornado.png";
    }

}

function winterWeather(roll,wObj, night) {
    wObj.seasonWind = randomElement(WIND_RULE);
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
            wObj.seasonWind = randomElement(WIND_BLIZZARD);
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
            wObj.seasonWeatherImage = "cloudyStorm" + night + ".png";
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

var  WIND_RULE = [
   'Strong',
   'Mild',
   'Light',
   'None',
   'Weak',
   'Warm',
   'Gale-Force',
   'Squally',
   'Violent',
   'Strong',
   'Blustery',
   'Howling',
   'Brisk',
   'Bitter',
];

var WIND_BLIZZARD  = [
   'Strong',
   'Gale-Force',
   'Squally',
   'Violent',
   'Strong',
   'Blustery',
   'Howling',
   'Brisk',
   'Bitter',
];


var WIND_HIGH = [
   'Gale-Force',
   'Violent',
   'Strong',
   'Blustery',
   'Howling',
   'Wild',
   'Gusts',
   'Tempest',
];

var WIND_FORCE = [
   'Gale-Force',
   'Squally',
   'Violent',
   'Strong',
   'Blustery',
   'Howling',
   'Brisk',
   'Bitter',
];
