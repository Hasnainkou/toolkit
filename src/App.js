import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Api from './Api';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouterDom from './RouterDom';
import Redux from './Redux';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
     <Nav/>
    <Routes>
     
    <Route path="/" element={<Home/>} />
    <Route path="/api" element={<Api/>} />
    <Route path="/routerDom" element={<RouterDom/>} />
    <Route path="/redux" element={<Redux/>} />

    {/* <Route path="/singleproduct/:id" element={<SingleProduct/>} /> */}

    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
