import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="ad79760ad5df006a124cc697900bf8d9";

    let getWeatherInfo = async(city) => {
    try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    return result;
    } catch(err) {
        throw err;
    }
 };


    let handelChange = (evt) => {
        setCity(evt.target.value);
    };

    let handelSubmit = async (evt) => {
      try{
        evt.preventDefault();
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo); 
        setCity("");
      } catch(err){
        setError(true);
      }
          
    };

    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handelSubmit}>
            <TextField id="outlined-basic" label="City Name" variant="outlined" onChange={handelChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color:"red"}}><b>NO such place exists!</b></p>}
            </form>
        </div>
    );
}