

import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Inicial from '../Pages/Home/inicial'
import ADM from '../Pages/ADM/adm'
import Critica from '../Pages/Adicionar/adicionar'

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                
                <Route path='/' element={<Inicial/>}/>
                <Route path='/ADM' element={<ADM/>}/>
                <Route path='/criticas/:id' element = {<Critica/>}/>
                <Route/>
            </Routes>
        </Router>
    )
}