import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BackgroundHome from '../../assets/img/BackgroundHome.png';
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from '../../services/service';

const HomeContainer = styled.div`

body {
    margin: 0;
  }


  .title-gallery {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size:125%;
    text-shadow:  4px 4px 4px #D9D9D9;
    text-transform: uppercase;
    
  }
  

  .background-img {
    width: 100%;
    height: auto;
  }

  .gallery {
    display: flex; 
    flex-wrap: wrap; 
    justify-content: space-around; 
  }

  .gallerygrid {
    margin: 10px; 
    text-align: center; 
  }

  .bicyclesimg {
    max-width: 17vw;
    max-height: 45vh; 
    border: 0.5rem solid #D9D9D9;
    cursor: pointer;
  }

  .bicyclesimg:hover {
    transform: scale(1.1);
    transition: 0.5s;

  }

  p {
    text-align: center;
    font-family: 'Jost', sans-serif;
    font-size: 100%;
    text-transform: uppercase;
    text-decoration: bold;
    text-shadow:  4px 4px 4px #D9D9D9;
    padding-top:5%;

  }

 gallery-button {
  
  display: flex;
  width: 5vw;
  justify-content: space-around;
  
  
 }

 button img {
  width: 50%;
  height: auto;
  

 }

button.edit-button, button.delete-button  {
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0.75rem;
  transition: 0.5s;
  

}



button.edit-button:hover, button.delete-button:hover {
  transform: scale(1.5);
}


`;

const Home = () => { // Crea un componente Home
  const [Products, setProducts] = useState([]); // Declara una constante bicycles y una función setBicycles que almacenan un array vacío UseState, se desestructura el array en dos elementos
  const navigate = useNavigate(); // Declara una constante navigate que almacena el hook useNavigate

  useEffect(() => {  // Crea un efecto que se ejecuta al renderizar el componente
      const fetchData = async () => {  // Crea una función fetchData que se ejecuta de manera asíncrona
      const data = await getProducts() // Declara una constante data que almacena el resultado de la función getBicycles
      console.log(data); // Muestra en consola el contenido de la constante data
      setProducts(data); // Ejecuta la función setBicycles con el contenido de la constante data como argumento
    }
    fetchData(); // Ejecuta la función fetchData
    }

   , []);


  return ( // Retorna un fragmento con el contenido del componente
    <>
    <HomeContainer>
        <img className="background-img"src={BackgroundHome} alt="Imagen de fondo de una chica apoyada sobre una bicicleta azul" />
        <h2 className="title-gallery">Productos bizzar</h2>
        <div className='gallery'>
          {Products.map((Product) => (
            <div className='gallerygrid' key={Product.id}>
              <img  onClick={() => navigate(`/card/${Product.id}`)} className="bicyclesimg" src={Product.image} alt={Product.model} />
              <p>{Product.model}</p>
              <div className="gallery-button" >
              <button className="edit-button" onClick={() => navigate(`/Edit/${Product.id}`)}>
                <img src="src\assets\img\Edit.png" alt="" />
              </button>
              <button className="delete-button" onClick={() => {deleteProduct(`${Product.id}`); navigate(0)}}>
                <img src="src\assets\img\Delete.png"></img></button>
              </div>
            </div>
          ))}
        </div>
      </HomeContainer>
    </>
  );
}
//useparamt luego peticion get de id que tngo en la url 
export default Home;
