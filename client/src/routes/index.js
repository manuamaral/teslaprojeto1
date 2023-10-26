import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/Home";
import Critica from "../pages/criticas/Criticas";
import { useState } from "react";

const filmes = [
  

  {
    id: 1,
    titulo: "Carros",
    genero: "acao",
    descricao: "Filme de heroi",
    imagem: "",
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
    id_filme: 2,
    nome: "Joao",
    critica: "Muito ruim",
    nota: 2,
    perfil: "",
  },
  {
    id: 1,
    id_filme: 1,
    nome: "Maria",
    critica: "Muito bom",
    nota: 4,
    perfil: "",
  },
  {
    id: 1,
    id_filme: 3,
    nome: "Fulano",
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
