import React from 'react';
import styled from 'styled-components';
import Addbutton from '../button/Button-add/add-button';
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
  background-color: #393939;
  height: 10vh;
  width: auto;
  color: white;
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const Logo = styled.img`
  margin-left: 1vw;
  height: 100%; /* Ajusta la altura del logo según sea necesario */
  transition: 0.5s;
  &:hover {
    filter: brightness(1.2); /* Cambia el brillo del logo al pasar el cursor */
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyleLink to="/">
        <Logo src="Front-End/src/assets/img/Logo.png" alt="Logo de Bizzar" /> {/* Reemplaza 'ruta_del_logo.png' con la ruta real de tu logo */}
      </StyleLink>
      <Addbutton />
    </StyledNav>
  );
}

export default Nav;
