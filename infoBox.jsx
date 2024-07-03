import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

import "./infoBox.css";
export default function InfoBox({info}){
    let Hot_URL="https://th.bing.com/th/id/OIP.eJH6AI_KaeOOvFfZ7WW2iAHaE8?w=271&h=181&c=7&r=0&o=5&dpr=1.1&pid=1.7";
    let Rain_URL="https://th.bing.com/th/id/OIP.IZ91a-d2X4Yg2LW5ZHahAQHaD_?w=322&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7";
    let Cold_URL="https://th.bing.com/th/id/OIP.BkfnPntLJ-5tTdT1D59k9gHaE8?w=283&h=189&c=7&r=0&o=5&dpr=1.1&pid=1.7";

    return(
        <div className= "InfoBox">
           <div className="cardContainer"><Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image = {info.humidity > 80 ? Rain_URL : (info.temp > 15 ? Hot_URL : Cold_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/> )} {info.city} 
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;</p>
        <p>Min Temp = {info.tempMin}&deg;</p>
        <p>Max Temp = {info.tempMax}&deg;</p>
        <p>Humidity = {info.humidity}</p>
        <p>The Weather can be described as <i>{info.weather}</i> and Feels like: {info.feels_like}&deg;</p>

        </Typography>
      </CardContent>
    </Card></div>
        </div>
    );
};