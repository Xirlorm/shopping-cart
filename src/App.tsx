import './App.css'
import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <h2>Hello, World!</h2>
      <Link to='/'>home</Link>&nbsp;...&nbsp;
      <Link to='shop'>shop</Link><br />
      <Outlet />
    </div>
  )
}

export default App
