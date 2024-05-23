"use client";

import { useState } from 'react';
import NavBar from '../components/nav-bar';
import CityForm from '../components/city-form';
import Card from '../components/card';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import { createServerClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

interface WeatherData {
  weatherData: any;
  forecastData: any;
}

export const revalidate = 0;
export const getDashboardData = async (city: string): Promise<WeatherData> => {
  try {
    const [weatherResponse, forecastResponse] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_URL_WEATHER}&q=${city}`),
      fetch(`${process.env.NEXT_PUBLIC_URL_FORECAST}&q=${city}`)
    ]);

    const weatherData = await weatherResponse.json();
    const forecastData = await forecastResponse.json();

    return { weatherData, forecastData };
  } catch (error) {
    console.error(error);
    return { weatherData: [], forecastData: [] };
  }
};
export default function DashboardPage() {
  // const supabase = createServerClient();
  // const user = await supabase.auth.getUser();
  // const users = await supabase.from("users").select("*");
  // console.log("Usuarios de supabase", users);
  
  const [city, setCity] = useState("");
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCityChange = async (newCity: string) => {
    setCity(newCity);
    setLoading(true);
    const newData = await getDashboardData(newCity);
    if (newData.weatherData.cod === "404" || newData.forecastData.cod === "404") {
      setError("Ciudad inexistente, por favor ingrese una ciudad válida.");
      setData(null);
      setShow(false);
    } else {
      setError(null);
      setData(newData);
      setShow(true);
    }
    setLoading(false);
  };
  
  // const supabase = createServerClient();
  // const user = await supabase.auth.getUser();
  // const users = await supabase.from("users").select("*");
  // console.log("Usuarios de supabase", users);

  // if (user.error) {
  //   return redirect('/');
  // }

  const router = useRouter();

  const handleLogout = () => {
    // Borra los datos del usuario del almacenamiento local
    localStorage.removeItem('user');

    router.push("/"); // Redirige al usuario al formulario de inicio de sesión
  };
  
  return (
    <div className="App text-center">
        <NavBar handleLogout={handleLogout}/>        
        <CityForm newLocation={handleCityChange}/> {/* Aquí se pasa handleCityChange */}
        {/* Aquí se puede usar los datos de clima y pronóstico */}
        <Card
          showData={show}
          loadingData={loading}
          weather={data ? data.weatherData : null}
          forecast={data ? data.forecastData : null}
          error={error}
        />
        <Footer/>    
    </div>
  );
}

/*
--container mx-auto px-4: Centra el contenedor horizontalmente y aplica un padding horizontal.
--flex mb-3 justify-center: Crea un contenedor flexbox, aplica un margen inferior y centra los elementos horizontalmente.
--shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline: Aplica varios estilos al input, incluyendo un borde, un sombreado, un padding y un color de texto gris. También hace que el input ocupe todo el ancho disponible.
--bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline: Aplica varios estilos al botón, incluyendo un color de fondo azul, un color de texto blanco y un peso de fuente en negrita. También aplica un padding y redondea las esquinas del botón.*/