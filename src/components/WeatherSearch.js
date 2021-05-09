import React from "react"

const WeatherSearch = ({api_call}) => {

    return (
        <form onSubmit={api_call} className="search-form">
            <input className="user-input" 
                type="text" 
                name="location"
                placeholder="Location" 
            />
            <button className="search-button">&rarr;</button>
        </form>
    )
  
}

export default WeatherSearch