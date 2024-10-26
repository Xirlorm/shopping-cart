export async function fetchEcommerceData(
  endpointArgs: string,
  args = { method: 'GET', mode: 'cors' },
) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/${endpointArgs}`, args as RequestInit
    );

    if (response.status < 200 || response.status > 299)
      throw Error("An error has occured!")

    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
}
export const scrollLeft = (element: string) => {
  const categories: HTMLElement | null = document.querySelector(element);
  if (categories !== null) {
    categories.scrollBy({
      left: categories.scrollLeft == 0 ?
        categories.scrollWidth :
        -categories.offsetWidth,
      behavior: 'smooth'
    })
  }
}

export const scrollRight = (element: string) => {
  const categories: HTMLElement | null = document.querySelector(element);

  if (categories !== null) {
    categories.scrollBy({
      left: (
        (categories.scrollWidth - categories.scrollLeft) <= categories.offsetWidth ?
        -categories.scrollWidth :
        categories.offsetWidth
      ),
      behavior: 'smooth'
    })
  }
}
