import React, { FC, FormEvent, useState } from 'react';

interface CityFormProps {
    newLocation: (city: string) => void;
}
const CityForm: FC<CityFormProps> = ({ newLocation }) => {
    const [city, setCity] = useState<string>("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({city});
        if(city === "" || !city) return;

        newLocation(city);
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <form onSubmit={onSubmit}>
                <div className="flex flex-col sm:flex-row mb-3 justify-center">
                    <input type="text" placeholder="Ciudad" onChange={(e) =>setCity(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0 sm:mr-2"/>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto">Buscar</button>
                </div>
            </form>
        </div>
    );
}

export default CityForm;

