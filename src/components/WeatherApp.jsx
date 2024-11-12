import React, { useEffect, useState } from 'react'
import { WeatherForm } from './WeatherForm'
import { WeatherMainInfo } from './WeatherMainInfo'

export const WeatherApp = () => {

  const [weather, setWeather] = useState(null)

  useEffect(() => {
    loadData('london')
  },[])

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`
  },[weather])
  

  const loadData = async(city) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_LINK}key=${import.meta.env.VITE_ACCESSKEY}&q=${city}&aqi=no`)
      const data = await response.json()
      setWeather(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }

  const handleChangeCity = (data) => {
    setWeather(null)
    loadData(data)
  }

  return (
    <div>
        <WeatherForm onChangeCity={handleChangeCity}/>
        <div>
          <WeatherMainInfo weather={weather}/>
        </div>
        <iframe src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62427.46441322061!2d${weather?.location.lon}!3d${weather?.location.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1731370629430!5m2!1ses-419!2spe`} width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
