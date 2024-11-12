import React, { Fragment } from 'react'

export const WeatherMainInfo = ({ weather }) => {
  return (
      <div>
        <h3>{weather?.location.name}</h3>
        <h3>{weather?.location.region}</h3>
h3       <h3>{weather?.location.country}</h3>
        <img src={weather?.current.condition.icon} style={{width: "200px"}}/>
        <h3>{weather?.current.condition.text}</h3>
        <h3>{weather?.current.temp_c}°</h3>
      </div>
  )
}
