async function getItems(args: string = '') {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${args}`)
    
    if (!response.ok) {
      throw new Error('Error fetching data')
    }
    
    const json = await response.json()
    return json
  } catch(error) {
    return error
  }
}

export default getItems
