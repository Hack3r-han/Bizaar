/* eslint-disable no-unused-vars */
import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getOneProduct} from '../../services/service';  // Cambiado "service" por "services/service" donde tenemos los métodos de la API
const CardContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80vh;
    align-items: center;
    flex-wrap: wrap;


    img {
        max-height: 60vh;
        max-width: 60vw;
        border: 0.5rem solid #D9D9D9;
    }

    .properties {
        display: grid;
        justify-content: flex-start;
        margin-left: 50px;
        width: 30vw;
        height: 10vh;
    }

    .container-properties {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30vw;
        max-height: 70vh;
    }

    h2 {
        text-align: center;
        font-family: 'Jost', sans-serif;
        font-size: 20%;
        text-transform: uppercase;
        text-decoration: bold;
    }

    p {
        font-family: 'Jost', sans-serif;
        text-align: center;
    }

    .product-title {
        font-size: 40px;
        font-weight: Bold;
    }

    .buttons-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 150px;
    }

    .contact-btn {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;    
    color: #F8FAE5;
    background-color: #398183;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-top: 40px;
    cursor: pointer;
    font-size: 16px;
    min-width: 120px;
    }

  
`

const Card = () => {  // Cambiado "props" por "id" para que coincida con el nombre que le damos en el archivo App.jsx
    const { id } = useParams();  //UseParams es un hook que nos permite acceder a los parámetros de la URL
    const [Product, setProduct] = useState();  //Usamos el hook useState para guardar el estado de la producto

    useEffect(() => {  //Usamos el hook useEffect para hacer la petición a la API
        const fetchProductDetails = async () => {           //fetchProductDetails es una función asíncrona que nos permite hacer la petición a la API
            const detailedProduct = await getOneProduct(id);  //Usamos el método getOneProduct de la API para obtener los detalles de la producto
            setProduct(detailedProduct); //Usamos el método setProduct para guardar los detalles de la producto en el estado
        };
        fetchProductDetails();          //Llamamos a la función fetchProductDetails
    }, [id]);   //Le pasamos el id como dependencia para que se ejecute cada vez que cambie el id
    
      if (!Product) {  //Si no hay producto, devolvemos un mensaje de error
        return <div style={{height: "80vh", fontFamily: "Jost", fontSize: "2em", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>No se encontró el producto</div>;
      } //Si hay producto, devolvemos la información de el producto

    return ( //Usamos el componente CardContainer para mostrar la información de la producto
        <CardContainer> 
        <img src={Product.image} alt={Product.model} />
        <section className="container-properties">
            <div className="properties">
                <p className="product-title">{Product.name}</p>
            </div>
            <div className="properties">
                <p>{Product.price}$</p>
            </div>
            <div className="properties">
                <p>{Product.status}</p>
            </div>
            <div className="properties">
                <p>{Product.description}</p>
            </div>
            <div className="buttons-container">
            <Link to="/contacto">
            <button className="contact-btn">Contacto</button>
            <button className="contact-btn">Comprar</button>
            </Link>
            </div>
        </section>
        </CardContainer>
    )
}


export default Card