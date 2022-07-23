import React, { useEffect, useState } from 'react'
import './style.css';
import WeatherCard from './WeatherCard';


export default function Temp() {

    const [tempInfo, setTempInfo] = useState({});
    const [searchValue, setSearchValue] = useState("Dhaka");

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=fd9e849214facc34fe2d6598b9545485`;
            let res = await fetch(url);
            let data = await res.json();
            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);

        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getWeatherInfo();
    });
    return (
        <>
            <div className="warp">
                <div className="search">
                    <input type="search" placeholder='search..' id='search' className='searchTermn' value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} />
                    <button className="searchButton" type='button'  onClick={getWeatherInfo}> Search</button>
                </div>
            </div>
            <WeatherCard {...tempInfo}/>
        </>
    )
}
