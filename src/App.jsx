import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Navbar from './Navbar';

export default function app() {
  return(
    <div className='p-6'>
      <div className='font-bold text-emerald-900'>Hello world กกก</div>
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  
}