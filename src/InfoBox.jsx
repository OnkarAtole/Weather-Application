import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import SearchBox from './SearchBox';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox(){
    const img1="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const hot_img="https://images.unsplash.com/photo-1743738049563-520b88442d04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const cold_img="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rain_img="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ="
    let [weatherInfo,setWeatherInfo]=useState({
            city:"city",
            temp:24.48,
            temp_min:22,
            temp_max:30,
            humidity:47,
            feelLIke:"297.15",
            description:"HAZE",
        
    });

    let updateInfo=(info)=>{
        setWeatherInfo(info);
    }
    return(
        <>
        <SearchBox updateInfo={updateInfo}/>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={weatherInfo.humidity>80 ? rain_img:weatherInfo.temp>15 ? hot_img:cold_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}
          {weatherInfo.humidity>80 ? <ThunderstormIcon/>:weatherInfo.temp>15 ? <SunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Temperature:{weatherInfo.temp}&deg;C <br></br><br></br>
          Min Temperature:{weatherInfo.temp_min}&deg;C <br></br><br></br>
          Max Temperature:{weatherInfo.temp_max}&deg;C <br></br><br></br>
          Humidity:{weatherInfo.humidity}<br></br><br></br>
          The weather can be describe as <i>{weatherInfo.description}</i> and feel like {weatherInfo.feelLIke}<br></br><br></br>
        </Typography>
      </CardContent>
      
    </Card>
        </>
    );

}