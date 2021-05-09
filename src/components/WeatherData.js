import React, {useState} from "react"
import WeatherDetails from "./WeatherDetails"


const WeatherData = ({weatherData}) => {
    
    const [details, setDetails] = useState(false)
    

    const { main, name, sys, weather } = weatherData
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    
    return (
        <div className="weather-data">
            <h3 className="city-name">{name}, {sys.country}</h3>
            <p className="weather-temperature">{main.temp}°C</p>
            <img className="weather-icon" src={weatherIcon} alt="WeatherIcon"/>
            <button 
                className="weather-details-button" 
                onClick={() => setDetails(true)}>
                Details
            </button>
            { details && <WeatherDetails details={main}/>}
        </div>
    )

}

export default WeatherData