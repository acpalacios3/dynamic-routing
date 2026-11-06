import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Navbar from './components/Navbar'
import Login from './pages/Login'

export default function App(){

    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/blog' element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>

    )

}

