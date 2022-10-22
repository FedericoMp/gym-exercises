import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Box from '@mui/material/Box';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExersiceDetail from './pages/ExersiceDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width='400px' sx={{ width: {xl: '1448px'}}} m='auto'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exercise/:id' element={<ExersiceDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
  )
}

export default App