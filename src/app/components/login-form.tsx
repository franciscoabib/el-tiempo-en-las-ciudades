'use client';

import { SlLogin } from "react-icons/sl";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ifError } from "assert";

export const LoginForm = () => {
  const [error, setError] = useState<string | null>(null) 
  const router = useRouter();

  return (
    <form
      className="flex flex-col items-center bg-[#2F3544] p-4 border-2 border-gray-300 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto"
      onSubmit={async (event) => {
        event.preventDefault();

        // Obtengo los datos
        const formData = new FormData(event.currentTarget);
        const user = formData.get('user')?.toString();
        const password = formData.get('password')?.toString();

        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user, password }),
        });

        const data = await response.json();

        if (response.ok === false) {
          setError(data.message);
        } else {
          router.push('/dashboard');
        }
      }}
        
    >
      <h1 className="text-4xl font-bold mb-8">Iniciar sesión</h1>
      <input
        type="text"
        name="user"
        placeholder="Usuario"
        className="w-full h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <input
        type="password"
        name="password"
        placeholder="Clave"
        className="w-full h-12 p-4 mb-4 border-2 border-gray-300 text-black"
      />
      <button className="w-full h-12 bg-blue-500  hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline flex justify-center items-center" type="submit">
        <span className="mr-2">Ingresar</span>
        <SlLogin className="w-10 h-10 md:w-5 md:h-5" />
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};