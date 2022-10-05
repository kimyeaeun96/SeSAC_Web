import React, {BrowserRouter, Routes, Route, Link, useSearchParams} from 'react-router-dom';
import Student from './Student'
import Landing from './Landing';
import './Prc64Router.css'

const Prc64 = () => {
    return(
        <header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/student/:name" element={<Student />} />
                </Routes>
            </BrowserRouter>
        </header>
    )
} 

export default Prc64;