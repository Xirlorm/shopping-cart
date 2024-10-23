import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <p style={{ textAlign: 'center', fontStyle: 'italic', padding: '0' }}>
        Limited offer. Up to 60% off! Shop now!
      </p>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
