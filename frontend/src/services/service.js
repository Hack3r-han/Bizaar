//Método GET
export const getProducts = async () => {  
    try {  
      const response = await fetch('https://ebazaar-api.vercel.app/products'); //MOCK DB PARA DESPLEGAR! Para conectar con el back-end server http://localhost:8080/api/v1/products
      const data = await response.json(); 
      return data 
    } catch (error) { 
      console.error('Error', error); 
    }
  };
//Método DELETE
export const deleteProduct= async (id) => {  
    const response = await fetch(`https://ebazaar-api.vercel.app/products/${id}`, { 
      method: 'DELETE'
    });
};

//Método POST
export const addProduct = async (data) => { 
  try {
      const response = await fetch('https://ebazaar-api.vercel.app/products', { 
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (response.ok) { 
          return { success: true };
      } else { 
          return { success: false, error: 'Hubo un problema al añadir tu producto. Por favor, intenta de nuevo más tarde.' };
      }
  } catch (error) {
      console.error('Error:', error);
      return { success: false, error: 'Hubo un problema al añadir tu producto. Por favor, intenta de nuevo más tarde.' };
  }
};

export const getItemById = async (id) => { 
  try {
    const response = await fetch(`https://ebazaar-api.vercel.app/products/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error', error);
  }
};
//Método PUT
export const updateItem = async (id, newData) => { 
  try {
    const response = await fetch(`https://ebazaar-api.vercel.app/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    });

    if (!response.ok) { 
      throw new Error('Error'); 
    }

    return response.json(); 
  } catch (error) { 
    console.error('Error', error);
    throw error;
  }
};

//Método GET para una bicicleta

//Método GET
export const getOneProduct = async (id) => {
  try {
    const response = await fetch(`https://ebazaar-api.vercel.app/products/${id}`);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Error', error);
  }
};