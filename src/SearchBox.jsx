import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox( {updateInfo} ){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    const API_URL_GEO = "http://api.openweathermap.org/geo/1.0/direct";
    const API_KEY = "__your__api__keys__";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async (city) => {
        try{
            let response_1 = await fetch(`${API_URL_GEO}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse_1 = await response_1.json();

            let lon_lat = {
                lon : jsonresponse_1[0].lon,
                lat : jsonresponse_1[0].lat
            }

            let response = await fetch(`${API_URL}?lat=${lon_lat.lat}&lon=${lon_lat.lon}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();

            // console.log(jsonresponse);
            let result = {
                city : city,
                temp : jsonresponse.main.temp,
                temp_max : jsonresponse.main.temp_max,
                temp_min : jsonresponse.main.temp_min,
                humidity : jsonresponse.main.humidity,
                weather : jsonresponse.weather[0].description,
                feelslike : jsonresponse.main.feels_like
            }

            console.log(result);

            return result;
        }catch(err){
            throw err;
        }
        
    }
    
    let handleCity = (event) => {
        // console.log(event.target.value);
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{    
            event.preventDefault();
            console.log(city);
            setCity("");
            let info = await getWeatherInfo(city);
            updateInfo(info);
        }catch (err) {
            setError(true);
        }
        
    }
    
    return (
        <div className='searchBox'>
            <h2>Search for the weather</h2>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Search for city" variant="outlined"  required value={city} onChange={handleCity}/>
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            {error && <p>No such place exists !</p>}
        </div>
    )
}