import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App(){

return(
<Routes>
        
         <Route path='/blog' element= {<Blog/>}/>
         <Route path="/blog/:slug" element={<BlogPost/>} />
</Routes>

)

}

