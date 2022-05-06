import React, {useState} from "react"

import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import Error from "./components/Error"
import Container from "./components/Container"
import './App.css'

const App = () => {

    const [weather, setWeather] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const api_call = async (location) => {

        const API_KEY = process.env.REACT_APP_API_KEY // Must start with 'REACT_APP' in order for this to work
        if (location) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            const request = await fetch(url)
            const response = await request.json()
            if (response.cod === 200) {
                setWeather(response)
                setErrorMessage("")
            } else {
                setWeather(null)
                setErrorMessage("Could not find weather info for this location, please try again.")
            }
        } else {
            setWeather(null)
            setErrorMessage("Please enter a location")
        }
    }

    return (
        <Container>
            <Header />
            <WeatherSearch api_call={api_call}/>
            { weather && <WeatherData weatherData={weather} /> }
            { errorMessage && <Error message={errorMessage} />}
        </Container>
    )

}

export default App;