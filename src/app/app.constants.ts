import { City } from "./models/city.model";

export const WEATHERAPP_API_URL = 'http://localhost:8080/weatherapp_backend';
export const RANDOM_IMG_API_URL = 'https://source.unsplash.com/featured/?';
export const BUGSNAG_API_KEY = '4ccacf4ce13edceb24f71f0a40b99b05';

export const CITIES_MOCK: City[] =
    [
        { cityname: "COIMBRA", id: 1, temperature: 16.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "KRAKOW", id: 1, temperature: 14.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "BRAGA", id: 1, temperature: 18.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "TOKYO", id: 1, temperature: 18.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "BRATISLAVA", id: 1, temperature: 19.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "PRAGA", id: 1, temperature: 16.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "MANAUS", id: 1, temperature: 32.0, timestamp: new Date("2023-04-20T06:40:01.03") },
        { cityname: "BRASILIA", id: 1, temperature: 30.0, timestamp: new Date("2023-04-20T06:40:01.03") }
    ];