import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
