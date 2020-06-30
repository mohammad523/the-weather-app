import React, { useState, useEffect} from 'react';
import FiveDay from './FiveDay/FiveDay'

function Weather() {

    const [allData, setAllData] = useState()
    const [cityName, setCityName] = useState()
    const [listData, setListData] = useState([ ])
    const [currentWeather, setCurrentWeather] = useState()

    useEffect ( () => {
        const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=75062,us&units=imperial&appid=0ab144033f62031c07bcf88c9cb4219c'
        const makeApiCall = async () => {
            const res = await fetch(weatherUrl)
            const json = await res.json()
            const data=json
            setAllData(data)
            setCityName(data.city.name)
            setListData(data.list)
            setCurrentWeather(data.list[0].main.temp)

        }
        makeApiCall()

     },[])

     console.log(cityName)
     console.log('current',currentWeather)

    


    
  return (
    <div className="Weather">
        <div class='today'>
            <h1>{cityName}</h1>
            <h1>{currentWeather}°F</h1>
        </div>
        <FiveDay listData={listData}/>
        <h1>Weather</h1>
    </div>
  );
}

export default Weather;
