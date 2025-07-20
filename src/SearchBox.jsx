import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import InfoBox from './InfoBox';


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="Paste API here";
    
    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
       let result = {
            city: city,
            temp: (jsonResponse.main.temp - 273.15).toFixed(2),         // Convert to Celsius
            temp_min: (jsonResponse.main.temp_min - 273.15).toFixed(2),
            temp_max: (jsonResponse.main.temp_max - 273.15).toFixed(2),
            humidity: jsonResponse.main.humidity,
            feelLike: (jsonResponse.main.feels_like - 273.15).toFixed(2),
            description: jsonResponse.weather[0].description,
        };

        console.log(result);
        return result;
        }catch(err){
            throw err;
        }

    }
    let handleChange=(event)=>{
        setCity(event.target.value);

    }
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let info=await getWeatherInfo();
        updateInfo(info);
        setError(false);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Weather App</h1>
            <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br></br><br></br>
             <Button variant="contained" endIcon={<SendIcon />} type='submit'>Search</Button>
             </form>
             <br></br><br></br>
             {error && <p style={{color:"red"}}>No such city in api database</p>}
        </div>
        
    );
}