import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import gifImage from '../../assets/img/cool-wallpapers-icegif-1.gif'; // Importa la ruta de tu archivo de gif
import { useNavigate } from "react-router-dom";
import { getProducts } from '../../services/service';

const HomeContainer = styled.div`
  /* Estilos para el contenedor principal */
`;

const BannerSection = styled.div`
  /* Estilos para la sección del banner */
  position: relative;
  width: 100%;
  height: 60vh; /* Ajusta el tamaño de la sección del banner según sea necesario */
  overflow: hidden;
`;

const GifBackground = styled.div`
  /* Estilos para el fondo de gif */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${gifImage});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const SloganContainer = styled.div`
  /* Estilos para el contenedor del slogan */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white; /* Cambia el color del texto a blanco */
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Slogan = styled.h2`
  /* Estilos para el slogan */
  font-family: 'Jost', sans-serif;
  font-size: 48px; /* Tamaño del texto */
  animation: ${pulseAnimation} 2s infinite; /* Animación de pulsación */
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Cuatro columnas */
  gap: 20px; /* Espacio entre los productos */
  padding: 20px; /* Añadido espacio interno */
  max-width: 1200px; /* Ancho máximo del contenedor */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  justify-content: center; /* Centra los elementos en el contenedor */
`;

const ProductFrame = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.p`
  font-weight: bold;
`;

const ProductPrice = styled.p``;

const ProductStatus = styled.p``;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const Home = () => {
  const [Products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      console.log(data);
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <BannerSection>
        <GifBackground />
        <SloganContainer>
          <Slogan>YOUR BAZAAR TO BUY ALL THINGS BIZARRE</Slogan>
        </SloganContainer>
      </BannerSection>
      <ProductGrid>
        {Products.map((Product) => (
          <ProductFrame key={Product.id}>
            <ProductImage src={Product.image} alt={Product.name} />
            <ProductName>{Product.name}</ProductName>
            <ProductPrice>{Product.price}</ProductPrice>
            <ProductStatus>{Product.status}</ProductStatus>
            <BuyButton onClick={() => navigate(`/Buy/${Product.id}`)}>Comprar</BuyButton>
          </ProductFrame>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
}

export default Home;
