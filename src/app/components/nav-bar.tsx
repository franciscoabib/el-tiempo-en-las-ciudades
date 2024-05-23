import React from 'react';
import Link from 'next/link'; // Importa el componente Link
import Logout from './logout';

const NavBar: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
    return(
        <nav className="bg-[#2F3544] text-white py-5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="w-1/4">
                    <Link href="/dashboard/create/"> {/* Añade la ruta a tu página */}
                        <a>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-right items-center">
                                <span className="mr-2">Comentarios</span>
                            </button>
                        </a>
                    </Link>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold w-1/2 text-center">Predicción Meteorológica</h3>                
                <div className="w-1/4 text-right">
                    <Logout handleLogout={handleLogout} />
                </div>
            </div>
        </nav>
    );
}
export default NavBar;
