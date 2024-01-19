import { useState } from 'react'
import './App.css'
import CurrentWeather from './assets/CurrentWeather'

function App() {

  const APIKEY = "6bc1bbab09e74c1d057b77c84992a99a"
  const [cityName, setCityName] = useState('')
  const [geoDataLoc, setgeoDataLoc] = useState('')
  const [weatherInfo, setWeatherInfo] = useState('')

  function ottieniGeoData(e) {
    e.preventDefault()
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${APIKEY}`)
      .then(response => response.json())
      .then(data => {
        setgeoDataLoc(data)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKEY}`)
          .then(response => response.json())
          .then(data => {
            setWeatherInfo(data)
            console.log()
          })
          .catch(error => {
            console.error("Errore", error);
          })

      })
      .catch(error => {
        console.error("Errore", error);
      })


  }

  function consoleLogTry() {
    console.log(geoDataLoc)
    console.log(weatherInfo)
  }

  return (
    <>
      <div className='container'>
      <img className={`${weatherInfo !== '' ? 'cloud-open' : 'clouds'}`} src="/img/nuvola.png" alt="" />
      <img className={`${weatherInfo !== '' ? 'cloud-open' : 'clouds'}`} src="/img/nuvola.png" alt="" />
        <img className="headerImage" src="/img/meteo3.png" alt="" />
        <h1>Cloud Chaser</h1>
        <p className='author'>By Matteo Romano</p>
        <form onSubmit={ottieniGeoData}>
          <input type="text" placeholder='City Name' onChange={(e) => setCityName(e.target.value)} />
          <button type="submit">Invia</button>
        </form>
        <CurrentWeather
          weatherInfo={weatherInfo}
        />
      </div>


    </>
  )
}

export default App
