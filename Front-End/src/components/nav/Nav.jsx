import styled from 'styled-components';
import { Link } from 'react-router-dom';
import  Logo  from '../../assets/img/Logo.png';

const StyledNav = styled.nav`
  background-color: #393939;
  height: 10vh;
  width: auto;
  color: white;
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;`
;

const StyleLink = styled(Link)` 
  text-decoration: none;
  color: inherit;`
;

const Logo1 = styled.img`
  height: 100%;
  width: 18rem;
  margin-left: 1vw;
  margin-top: 10px;
  transition: 0.5s;
  &:hover {
    filter: brightness(1.2);
    transition: 0.5s;
    transform: scale(1.1);
  }`
;

// const SearchInput = styled.input`
//   margin: 0 1rem;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 300px; /* Ancho ajustado de la barra de búsqueda */`
// ;

const AddProductButton = styled.button`
  background-color: #398183;
  color: white;
  border: none;
  padding: 1rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;`
;
const NavButtons = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;`

const Nav = () => {

  return (
    <StyledNav>
      <StyleLink to="/">
      <Logo1 src={Logo} alt="Logo de Bizzar" />
      </StyleLink>
      <NavButtons>
      <StyleLink to="/NewItem">
      <AddProductButton onClick={() => console.log('Subir un producto')}>Subir un producto</AddProductButton>
      </StyleLink>
      <StyleLink to="/Edit/:id">
      <AddProductButton onClick={() => console.log('Editar un producto')}>Editar un producto</AddProductButton>
      </StyleLink>
      </NavButtons>
      
    </StyledNav>
  );
}

export default Nav;
