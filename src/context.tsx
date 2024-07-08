import { createContext, Dispatch, SetStateAction } from "react";

const AppContext = createContext({
  itemsInCart: 0 as number,
  setItemsInCart: (() => {}) as Dispatch<SetStateAction<number>>,
})

export default AppContext