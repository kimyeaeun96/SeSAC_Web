import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from "./Main"
import Product from './Product';

const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to="/">메인페이지</Link><br/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/product/:id" element={<Product />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;

// /product/10 으로 해도 됨