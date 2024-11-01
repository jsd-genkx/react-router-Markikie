import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
// import About from './About';
// import Contact from './Contact';
// import Navbar from './Navbar';

export default function app() {
  return(
    <div className='p-6'>
      <div className='font-bold text-emerald-900'>Hello world</div>
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  
}