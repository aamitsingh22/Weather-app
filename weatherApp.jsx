import SearchBox from "./src/SearchBox"
import InfoBox from "./infoBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo] = useState(
        {
            city: "WonderLand",
            feels_like: 30.66,
            humidity: 18,
            temp: 32.84,
            tempMax: 33.05,
            tempMin: 32.84,
            weather: "haze",
            }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return <div style={{textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
}