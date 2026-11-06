import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Blog from './pages/Blog'

export default function App(){

return(
<Routes>
        

         <Route path='/blog' element= {<Blog/>}/>
       

</Routes>

)


}

