import React from "react"

const WeatherSearch = ({api_call}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = e.target.elements.location.value;
        api_call(location)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                className="user-input"
                type="text"
                name="location"
                placeholder="Location"
            />
            <button className="search-button">&rarr;</button>
        </form>
    )
}

export default WeatherSearch