const endpoint = 'https://api.escuelajs.co/api/v1/';

 export async function getProducts() {
  try {
    const response = await fetch(
      endpoint + 'products',
      { method: 'GET', mode: 'cors' }
    );

    if (response.status < 200 || response.status > 299)
      throw Error("An error occured!")

    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(
      endpoint + 'categories',
      { method: 'GET', mode: 'cors' }
    );

    if (response.status < 200 || response.status > 299)
      throw Error("An error occured!")

    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
