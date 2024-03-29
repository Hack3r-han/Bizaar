import React from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import { Link } from 'react-router-dom'


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

const Contact = () => {  // Añade el hook useNavigate a la importación de react-router-dom y declara una constante navigate que almacena el hook useNavigate

    const { register, formState: { errors }, handleSubmit, reset} = useForm(); // Desestructura los métodos register, errors y handleSubmit del hook useForm
    const onSubmit = async (data) => {  // Crea una función asíncrona onSubmit que recibe un parámetro data y hace una petición a la API con el método addBicycle
        const { success, error } = await addProduct(data);  // Desestructura las propiedades success y error de la respuesta de la petición a la API con el método addBicycle

        if (success) {  // Si success es true
            // Mostrar mensaje de éxito
            alert('¡El producto fue añadido correctamente!');
            // Reiniciar el formulario
            reset();
        } else {
            // Mostrar mensaje de error
            alert(error);  // Si success es false, muestra el mensaje de error
        }
    };

    return (
        <StyledNewItem>
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">Contacta con el vendedor</h2>
            <div>
                <input className='model' type="text" placeholder="Tu nombre"{...register('name', {
                    required: true,
                })}/>
                {errors.model?.type === 'required' && <p className="error-message">El campo nombre es requerido</p>}
            </div>
            <div>
                <input className='speeding' type="text" placeholder="Email"{...register('price', {
                    pattern: /^[0-9]{1,3}$/,
                    required: true,
                })}/>
                {errors.speeds?.type === 'pattern' && <p className="error-message">La velocidad debe ser un valor numérico</p>}
                {errors.speeds?.type === 'required' && <p className="error-message">El campo velocidades es requerido</p>}
            </div>

            <textarea placeholder="Observaciones..." id="descripcion" name="descripcion" rows="4" cols="50" {...register('description')}></textarea>
            
            <div className="buttons-container">
             <Link to="/">
             <button  className="btn" type="submit" value="Añadir">Enviar</button>
             </Link>
             </div>

       </form>
        </StyledNewItem>
    );
}
           
export default Contact; // Exporta el componente NewItem para poder utilizarlo en otros archivo