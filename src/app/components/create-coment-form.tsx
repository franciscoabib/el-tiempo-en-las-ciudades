import React from 'react';
import { Button, Container, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import Footer from './footer';

export const ComentForm = () => {
  return (
    <Container>
      <form className="flex flex-col gap-4 container mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center">      
        <div>
          <FormControl>
            <FormLabel>Deje su comentario</FormLabel>
            <Textarea className="text-black w-full sm:w-3/4 lg:w-1/2" maxLength={1000} placeholder="Escribe tu comentario aquí" />
          </FormControl>
        </div>
        <div className="flex gap-4 mt-4">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-center items-center" colorScheme="teal" size="lg" type="button">
            <span className='mr-2'> Enviar comentario</span>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-center items-center" colorScheme="teal" size="lg" type="button">
            <span className='mr-2'> Editar comentario</span>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-center items-center" colorScheme="teal" size="lg" type="button">
            <span className='mr-2'> Ver comentario</span>
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto flex justify-center items-center" colorScheme="teal" size="lg" type="button">
            <span className='mr-2'> Eliminar comentario</span>
          </Button>
        </div>
        <Footer/>
      </form>
    </Container>
  );  
};

export default ComentForm;
