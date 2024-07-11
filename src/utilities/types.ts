export interface product {
  title: string,
  id: number,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
  [key: string]: unknown,
}
