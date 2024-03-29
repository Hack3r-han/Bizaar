import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { addProduct } from '../../services/service';

const StyledNewItem = styled.div`


height: 80vh;
display: flex;
align-items: center;

body {
    max-height: 100%;
  }

  form {
    font-family: "Montserrat", sans-serif;
    max-width: 450px;
    min-width: 300px;
    margin: 0 auto;
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 2%;

  }
  
  label {
    display: block;
    margin-bottom: 2%;
    color: #000000;
  }
  
  input[type="text"],
  input[type="file"],
  select {
    width: 100%;
    padding: 3%;
    margin-bottom: 5%;
    border: none;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input[type="submit"] {
    width: 100%;
    padding: 3%;
    border: none;
    background-color: #000000;
    color: #FFFFFF;
    font-size: 15%;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
  }
  
  input[type="submit"]:hover {
    background-color: #333333;
  }
  
  .add {
    margin-top: 10%;
  }
  
  .error-message {
    color: red;
  }  
  
  .cuadred {
    display: flex;
  }
  
  .frame,
  .electric {
    display: flex;
    align-items: center; /* Alinear verticalmente */
    margin-right: 5%; /* Espacio entre los campos */
  }
  
  .frame label,
  .electric label {
    margin-right: 5%; /* Espacio entre el label y el input */
    
  }
  
  .frame select {
    flex: 1; /* El input ocupa todo el espacio restante */
    width: 125px;
    margin-top: 5%;
    
  }
  
  .electric input[type="checkbox"] {
    justify-content: flex-end;
    width: 50%;
    height: 50%;
  }

  textarea {
    background-color: #f2f2f2; /* Gris claro */
    border: 1px solid #ccc; /* Borde gris */
    border-radius: 5px; /* Bordes redondeados */
    padding: 8px; /* Espaciado interno */
    width: 100%; /* Ancho completo */
    box-sizing: border-box; /* Incluye el padding en el ancho */
  }
  
  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 150px;
}

.btn{
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
`;

const NewItem = () => {  
  const { register, formState: { errors }, handleSubmit, reset} = useForm(); 

  const onSubmit = async (data) => {  
      const { success, error } = await addProduct(data); 

      if (success) { 
          alert('¡El producto fue añadido correctamente!');
          reset();
      } else {
          alert(error);  
      }
  };

  return (
      <StyledNewItem>
          <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form-title">Vende tu producto</h2>
              <div>
                  <input type="text" placeholder="Nombre del producto" {...register('name', {
                      required: true,
                  })}/>
                  {errors.name && <p className="error-message">El campo producto es requerido</p>}
              </div>
              <div>
                  <input type="text" placeholder="Precio" {...register('price', {
                      pattern: /^[0-9]+$/,
                      required: true,
                  })}/>
                  {errors.price && <p className="error-message">El precio debe ser un valor numérico</p>}
              </div>
              <div>
                  <label>Estado:</label>
                  <select {...register('status')}>
                      <option value="new">Nuevo</option>
                      <option value="used">Usado</option>
                  </select>
              </div>
              <div>
                  <input placeholder="URL de la imagen" type="text" {...register('image', {
                      required:true,
                  })}/>
                  {errors.image && <p className="error-message">La URL de la imagen es requerida</p>}
              </div>
              <label>Descripción:</label>
              <textarea id="description" name="description" rows="4" cols="50" {...register('description')}></textarea>
              <div className="buttons-container">
                  <button className="btn" type="submit">Añadir</button>
                  <Link to="/">
                      <button className="btn">Cancelar</button>
                  </Link>
              </div>
          </form>
      </StyledNewItem>
  );
}
         
export default NewItem;