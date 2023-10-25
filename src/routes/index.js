import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/home/Home'
import Critica from '../pages/criticas/Criticas'

const filmes = [
    {
      id: 1,
      titulo: 'Vingadores',
      descricao: 'Filme de heroi',
      imagem: 'https://th.bing.com/th/id/OIP.6-pToyu6ZnZnsO1rkhRoxAHaFj?pid=ImgDet&rs=1',
      nota:5
    },
    {
      id: 2,
      titulo: 'Filme 2',
      descricao: 'Descrição do Filme 2',
      imagem: 'https://via.placeholder.com/300x200',
      nota:4
    },
    {
      id: 3,
      titulo: 'Filme 3',
      descricao: 'Descrição do Filme 3',
      imagem: 'https://via.placeholder.com/300x200',
      nota:2
    },
  ];

  const criticas = [
    {
      id: 1,
      id_filme: 2,
      nome: 'Joao',
      critica: 'Muito ruim',
      nota: 2,
      perfil: ""
    },
    {
        id: 1,
        id_filme: 1,
        nome: 'Maria',
        critica: 'Muito bom',
        nota: 4,
        perfil: ""
      },
      {
        id: 1,
        id_filme: 3,
        nome: 'FUlano',
        critica: 'Perfeito',
        nota: 5,
        perfil: ""
      },
  ];

export const RouterApp=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Home filmes={filmes}/>}/>
                <Route path='/criticas' element = {<Critica/>}/>
                <Route/>
            </Routes>
        </Router>
    )
}