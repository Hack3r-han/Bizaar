import {React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { getOneProduct} from '../../services/service'; 
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

const Card = () => { 
    const { id } = useParams();  
    const [Product, setProduct] = useState();  

    useEffect(() => {  
        const fetchProductDetails = async () => {          
            const detailedProduct = await getOneProduct(id); 
            setProduct(detailedProduct); 
        };
        fetchProductDetails();          
    }, [id]);   
    
      if (!Product) {  
        return <div style={{height: "80vh", fontFamily: "Jost", fontSize: "2em", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>No se encontró el producto</div>;
      } 

    return (
        <CardContainer> 
        <img src={Product.image} />
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