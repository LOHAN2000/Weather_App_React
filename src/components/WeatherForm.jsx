import React, { useState } from 'react'

export const WeatherForm = ( {onChangeCity }) => {
  
  const [city, setCity] = useState('')
  
  const onChange = (e) => {
    const data = e.target.value

    if(data !== ''){
      setCity(data)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onChangeCity(city)
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input type='text' onChange={onChange}/>
    </form>
  )
}
