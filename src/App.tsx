import styles from './styles/App.module.css'
import AppContext from './context'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { useState } from 'react'

function App() {
  const [itemsInCart, setItemsInCart] = useState(0)

  return (
    <AppContext.Provider value={{
      itemsInCart,
      setItemsInCart,
    }}>
      <div className={styles.container}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default App
