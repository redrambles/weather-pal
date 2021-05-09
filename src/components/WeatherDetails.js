import React from "react";

const WeatherDetails = ({details}) => {
    
    return (
        <div className="weather-details">
            <p className="weather-detail">Pressure: {details.pressure}</p>
            <p className="weather-detail">Humidity: {details.humidity}</p>
        </div>
    )
}

export default WeatherDetails