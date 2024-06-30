import App from './App.tsx'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Shop from './pages/Shop.tsx'

const router = [{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, element: <Home /> },
    { path: 'shop', element: <Shop /> },
  ],
}]

export default router