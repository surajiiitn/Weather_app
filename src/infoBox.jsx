import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
export default function InfoBox({weather}){
    let rain_url = "https://images.unsplash.com/photo-1623567932970-576132e5d056?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    let winter_url = "https://images.unsplash.com/photo-1704577191033-6f5d26a40bb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let summer_url = 'https://plus.unsplash.com/premium_photo-1680995369588-502d70f0e3c8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fHww';
    

    return (
        <div className='box'>
        <h1>Weather Info </h1>
        <div className="card_content">
        <Card sx={{ maxWidth: 345 }}>
       <CardMedia
            sx={{ height: 140 }}
            image={
                weather.humidity > 80
                ? rain_url
                : weather.temp > 15
                ? summer_url
                : winter_url
            }
            title="weather"
            />

        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {weather.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <div>Temperature = {weather.temp}&deg;</div>
                <div>Minimum Temperature = {weather.temp_min}&deg;</div>
                <div>Maximum Temperature = {weather.temp_max}&deg;</div>
                <div>Humidity = {weather.humidity}&deg;</div>
                <div>The weather feels like {weather.feelslike}&deg;</div>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>

    );
}