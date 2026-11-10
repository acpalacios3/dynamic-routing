import { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import { AuthContext } from './context/AuthContext'

import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Home from './pages/Home'


export default function App(){

    // get the authentication status from AuthContext
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/blog' element={
                    <div className='page-content'>
                    <Blog />
                    </div>
                    } />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/login" element={<Login />} />
                  {/* Protected Admin Route */}
                <Route path="/admin" element={isAuthenticated ? <Admin />
                                                            : <Navigate to="/login" replace />
                                             }
                />

            </Routes>
        </>

    )

}

