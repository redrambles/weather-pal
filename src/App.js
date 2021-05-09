import React, {useState} from "react"

import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import Error from "./components/Error"
import Container from "./components/Container"
import './App.css'

const App = () => {

    const [weather, setWeather] = useState(null)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const api_call = async (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        const API_KEY = process.env.REACT_APP_API_KEY // Must start with 'REACT_APP' in order for this to work
        if (location) {            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            const request = await fetch(url)
            const response = await request.json()
            if (response.cod === 200) {
                setWeather(response)
                setShowError(false)
                setErrorMessage("")
            } else {
                setWeather(null)
                setShowError(true)
                setErrorMessage("Could not find weather info for this location, please try again.")
            }    
        } else {
            setWeather(null)
            setShowError(true)
            setErrorMessage("Please enter a location")
        }
    }
 
    return (
        <Container>
            <Header />
            <WeatherSearch api_call={api_call}/>
            { weather && <WeatherData weatherData={weather} /> }
            { showError && <Error message={errorMessage} />}
        </Container>
    )
 
}

export default App;