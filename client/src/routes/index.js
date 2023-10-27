import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "../header/Header";
import Home from "../pages/home/Home";
import Critica from "../pages/criticas/Criticas";
import { useState } from "react";


const filmes = [
  

  {
    id: 1,
    titulo: "Spider-Man",
    genero: "acao",
    descricao: "Filme de heroi",
    imagem: "https://th.bing.com/th/id/OIP.u6u2PgeTDuvEabQWqNQFDgHaK-?pid=ImgDet&rs=1",
    nota: 5,
  },
  {
    id: 2,
    titulo: "Filme 2",
    genero: "romance",
    descricao: "Descrição do Filme 2",
    imagem:"",
    nota: 4,
  },
  {
    id: 3,
    titulo: "Filme 3",
    genero: "acao",
    descricao: "Descrição do Filme 3",
    imagem: "",
    nota: 2,
  },
];

const criticas = [
  {
    id: 1,
    id_filme: 3,
    nome: "Joao",
    critica: "Muito ruim",
    nota: 2,
    perfil: "",
  },
  {
    id: 1,
    id_filme: 3,
    nome: "Maria",
    critica: "Muito bom",
    nota: 4,
    perfil: "",
  },
  {
    id: 1,
    id_filme: 3,
    nome: "Alberto",
    critica: "Perfeito",
    nota: 5,
    perfil: "https://th.bing.com/th/id/OIP.QjynegEfQVPq5kIEuX9fWQHaFj?pid=ImgDet&rs=1" ,
  },
 
];

export const RouterApp = () => {
  const [filmeSelecionado, setFilmeSelecionado] = useState();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home filmes={filmes} selecionarFilme={setFilmeSelecionado} />
          }
        />

        <Route
          path="/criticas"
          element={<Critica criticas={criticas} idFilme={filmeSelecionado} />}
        />

        <Route />
      </Routes>
    </Router>
  );
};