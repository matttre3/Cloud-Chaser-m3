import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = ({ weatherInfo }) => {

  function kelvintToCelsius(kelvin) {
    let celsius = Math.floor(kelvin - 273.15)
    return celsius
  }

  function mTok(m){
    let k = m*3600/1000
    return m
  }

  var dataAttuale = new Date();
  var ore = (dataAttuale.getHours<10 ? ('0'+ dataAttuale.getHours()):(dataAttuale.getHours()));
  var minuti = (dataAttuale.getMinutes<10 ? ('0'+ dataAttuale.getMinutes()):(dataAttuale.getMinutes()));
  

  return (
    <div className='currentConditionsContainer'>

      {weatherInfo != '' ?
        (
        <>
        <img src={(`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`)} alt="" />
        <h2 className='cityName'>{weatherInfo.name}</h2>
        <p className='description'>{weatherInfo.weather[0].description}</p>
        <div className='infoContainer'>
          <div className='info'>
          <img className='icon' src="/img/temp.webp" alt=""></img>
          <p className='p-desc'>{kelvintToCelsius(weatherInfo.main.temp)}°</p>
          </div>
          <div className='info'>
          <img className='icon' src="/img/wind.webp" alt=""></img>
          <p className='p-desc'>{mTok(weatherInfo.wind.speed)}km/h</p>
          </div>
          <div className='info'>
          <img className='icon' src="/img/clock.webp" alt=""></img>
          <p className='p-desc' >{ore}:{minuti}</p>
          </div>
          
          
        </div>
        </>
        ) : 
        ('')
      }
    </div>
  )
}

export default CurrentWeather
