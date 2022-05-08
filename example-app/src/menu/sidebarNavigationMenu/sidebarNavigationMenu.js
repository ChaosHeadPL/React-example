import './sidebarNavigationMenu.css';
import {Navbar} from './components/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


export const SidebarNavigationMenu = () => {
    
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/reports' element={<Products />} />
                    <Route path='/products' element={<Reports />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
