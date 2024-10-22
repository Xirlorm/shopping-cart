const endpoint = 'https://api.escuelajs.co/api/v1/';

 export async function getProducts() {
  try {
    const response = await fetch(endpoint + 'products', { mode:'cors' });

    if (!response.ok) throw Error("An error occured!")

    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
