import React from "react"

import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import Error from "./components/Error"
import Container from "./components/Container"
import './App.css'

class App extends React.Component {
    state = {
        weather: null,
        showError: false,
        errorMessage: ""
    }
    api_call = async (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        const API_KEY = process.env.REACT_APP_API_KEY // Must start with 'REACT_APP' in order for this to work
        if (location) {            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            const request = await fetch(url)
            const response = await request.json()
            if (response.cod === 200) {
              this.setState({weather: response, showError: false, errorMessage: ""})
            } else {
              this.setState({weather: null, showError: true, errorMessage:"Could not find weather info for this location, please try again."})
            }    
        } else {
            this.setState({weather: null, showError: true, errorMessage:"Please enter a location"})
        }
    }
    render() {
        return (
            <Container>
                <Header />
                <WeatherSearch api_call={this.api_call}/>
                { this.state.weather && <WeatherData weatherData={this.state.weather} /> }
                { this.state.showError && <Error message={this.state.errorMessage} />}
            </Container>
        )
    }
}

export default App;