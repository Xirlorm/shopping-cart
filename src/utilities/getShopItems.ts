async function fetchData(args: string = '') {
  try {
    const response = await fetch(`https://fakestoreapi.com/${args}`)
    
    if (!response.ok) {
      throw new Error('An error occured while fetching data')
    }
  
    const json = await response.json()
    return json
  } catch(error) {
    return error
  }
}

export default fetchData
