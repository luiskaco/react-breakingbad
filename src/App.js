import React, {useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Frase from './components/frases';

const Contenedor =  styled.div`
    display:flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

const Boton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 44% , #0f574e 100%);
    background-size:300px;
    font-family: Arial, Helvetica, sans-serif;
    color:#fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease;

    :hover{
      cursor:pointer:
      background-size:400px;

    }
`;

function App() {
  // Creando el state de frase
  const [frase, setSaveFrase] = useState({});

  // FORMA CON ASYNC AWAIT
  const ConsultarApi = async () =>{
      const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');//br   
      const frase = await api.json();        
      //console.log(frase);
      setSaveFrase(frase[0]);
  }

   /*  FROMA CON THEN de PROMISE
     const ConsultarApi2 = () => {
      const api2 = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      const frase2 = api2.then(respuesta => respuesta.json());
      frase2.then(resultado => console.log(resultado));
  } */  

  //CArgar una fases
  useEffect(() =>{
    ConsultarApi();
  },[])



  /** FORMAS DE LLMAR UNA FUNCION
   *  onClick={ConsultarApi}
   *  onClick={() => ConsultarApi()}
   *  ConsultarApi()  << llama de frente a la funcion
  */

  return (
    <Contenedor>
        <Frase 
          frase={frase}
        
        />
        <Boton 
            onClick={() => ConsultarApi()}
          >Obtener Frases</Boton>
    </Contenedor> 
  );
}

export default App;
