export async function fetchEcommerceData(
  endpointArgs: string,
  args = { method: 'GET', mode: 'cors' },
) {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/${endpointArgs}`, args as RequestInit
    );

    if (response.status < 200 || response.status > 299)
      throw Error("An error has occured!")

    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
