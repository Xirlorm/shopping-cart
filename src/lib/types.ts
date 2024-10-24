export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: number;
    image: string;
    creationAt?: string;
    updatedAt?: string;
  },
  images: string[];
  creationAt?: string;
  updatedAt?: string;
}

export type CategoryType = {
  id: number;
  name: string;
  image: string;
}
