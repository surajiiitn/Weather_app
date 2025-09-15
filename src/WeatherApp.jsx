import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
export default function WeatherApp(){

    const [newweather,setnewWeather] = useState({
        city : "Chennai",
        feelslike: 35.77,
        humidity : 55,
        temp: 32.06,
        temp_max: 32.06,
        temp_min: 32.06,
        weather: "haze"
    });

    let updateInfo = (result) => {
        setnewWeather(result);
    }

    return (
    <>
        <h1 style={{textAlign : "center"}}>This is weather app</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox weather={newweather}/>
    </>
    )
}