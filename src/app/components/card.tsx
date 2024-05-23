import React, { FC } from 'react';
import Spinner from './spinner';
import { WeatherData,ForecastListData, ForecastData } from './types';

interface CardProps {
    loadingData: boolean;
    showData: boolean;
    weather: WeatherData | null;  // Actualizado para ser WeatherData | null
    forecast: ForecastData | null;  // Actualizado para ser ForecastData | null
    error: string | null;  // Prop para el mensaje de error
}
const Card: FC<CardProps> = ({loadingData, showData, weather, forecast, error}) => {

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastDate3 = "";
    var forecastDate6 = "";
    var forecastDate9 = "";

    if(loadingData){
        return  <Spinner />;
    }
    if (error) {
      return <h2 className="text-white text-3xl font-bold">{error}</h2>;
  }
    if(showData && weather && weather.weather && weather.weather[0] && forecast){
      url = "http://openweathermap.org/img/w/";
      iconUrl = url + weather.weather[0].icon + ".png";
        
        if (forecast && forecast.list[1]) {
            iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
            forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13);
        }
        if (forecast && forecast.list[2]) {
            iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
            forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13);
        }
        if (forecast && forecast.list[3]) {
            iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";
            forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13);
        }
    }
    
return (
    <div className="mt-5 max-w-3/5 mx-auto">
      {showData && weather && weather.main && weather.weather && weather.weather[0] && forecast ? (
        <div className="container mx-auto px-4">
          <div className="card bg-gray-800 text-white mx-auto mb-3">
            <div className="flex m-0">
              <div className="md:w-1/3">
                <h3 className="card-title absolute p-5">{weather.name}</h3>
                <p className="card-date absolute pl-5 mt-16">{date}</p>
                <h1 className="card-temp absolute pl-5 mt-64 text-6xl">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1>
                <p className="card-desc absolute pl-5 mt-80">
                  <img src={iconUrl} alt="icon" />
                  {weather.weather[0].description}
                </p>
                <img
                  src="https://images.pexels.com/photos/10817264/pexels-photo-10817264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="w-1/2">
                <div className="card-body text-start mt-2">
                  <h5 className="card-text">
                    Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                  <h5 className="card-text">
                    Velocidad del viento: {weather.wind.speed}m/s
                  </h5>
                </div>
                <hr />
                <div className="flex flex-row mt-4">
                  <div className="w-1/3">
                    <p>{forecastDate3}h</p>
                    <p className="description flex justify-center items-center">
                      <img src={iconUrl3} alt="icon" />
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  <div className="w-1/3">
                    <p>{forecastDate6}h</p>
                    <p className="description flex justify-center items-center">
                      <img src={iconUrl6} alt="icon" />
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  <div className="w-1/3">
                    <p>{forecastDate9}h</p>
                    <p className="description flex justify-center items-center">
                      <img src={iconUrl9} alt="icon" />
                      {forecast.list[3].weather[0].description}
                    </p>
                    <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-white text-3xl font-bold">Sin datos</h2>
    )}
    </div>
  );
}
export default Card;