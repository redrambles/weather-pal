import React from "react"
import WeatherDetails from "./WeatherDetails"


class WeatherData extends React.Component {
    
    state = {
        details: false
    }
    
    render() {
        const { main, name, sys, weather } = this.props.weatherData
        const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
        
        return (
            <div className="weather-data">
                <h3 className="city-name">{name}, {sys.country}</h3>
                <p className="weather-temperature">{main.temp}°C</p>
                <img className="weather-icon" src={weatherIcon} alt="WeatherIcon"/>
                <button 
                    className="weather-details-button" 
                    onClick={() => this.setState({details: true})}>
                    Details
                </button>
                { this.state.details && <WeatherDetails details={main}/>}
            </div>
        )
    }
}

export default WeatherData