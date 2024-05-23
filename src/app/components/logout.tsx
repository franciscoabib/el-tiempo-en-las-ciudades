import { SlLogout } from "react-icons/sl";

const Logout: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-right items-center"
      type="button" // Cambia 'submit' a 'button' para evitar que se envíe el formulario
      onClick={handleLogout} // Agrega un manejador de clics que llame a la función handleLogout
    >
      <span className="mr-2">Cerrar sesión</span> {/* Cambia 'Ingresar' a 'Cerrar sesión' */}
      <SlLogout className="w-10 h-10 md:w-5 md:h-5" />
    </button>
  );
};
export default Logout;