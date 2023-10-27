import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/home/Home";
import Critica from "../pages/criticas/Criticas";
import { useState } from "react";


const filmes = [
  
    
      {
        id: 1,
        titulo: "Matrix",
        genero: "acao",
        descricao: "Um mundo de realidade virtual e rebeldia contra máquinas",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
        nota: 4,
      },
      {
        id: 2,
        titulo: "Um Amor para Recordar",
        genero: "romance",
        descricao: "Um amor proibido entre dois jovens em uma cidade pequena",
        imagem: "https://2.bp.blogspot.com/-QwJpZ1Vl3fI/UZFRRa7xkwI/AAAAAAAAAGs/mIsGh0kcFAE/s1600/foto6.jpg",
        nota: 5,
      },
      {
        id: 3,
        titulo: "Clube da Luta",
        genero: "acao",
        descricao: "Um homem descontente forma um clube secreto de luta subterrânea",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2b/FightClubPoster.jpg/230px-FightClubPoster.jpg",
        nota: 4,
      },
      {
        id: 4,
        titulo: "Diário de uma Paixão",
        genero: "romance",
        descricao: "Um casal enfrenta desafios enquanto tenta manter seu amor vivo ao longo dos anos",
        imagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/21/92/20135014.jpg",
        nota: 4,
      },
      {
        id: 5,
        titulo: "Cisne Negro",
        genero: "drama",
        descricao: "A busca da perfeição de uma bailarina no limite de sua sanidade",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/ea/Cisne_Negro_-_P%C3%B4ster.jpeg/250px-Cisne_Negro_-_P%C3%B4ster.jpeg",
        nota: 4,
      },
      {
        id: 6,
        titulo: "Mad Max: Estrada da Fúria",
        genero: "acao",
        descricao: "Um mundo pós-apocalíptico e a luta pela sobrevivência",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/23/Max_Mad_Fury_Road_Newest_Poster.jpg/250px-Max_Mad_Fury_Road_Newest_Poster.jpg",
        nota:5,
      },
      {
        id: 7,
        titulo: "O Diário de Bridget Jones",
        genero: "romance",
        descricao: "As desventuras amorosas de uma mulher solteira em Londres",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/17/BridgetJonesDiaryMoviePoster.jpg/150px-BridgetJonesDiaryMoviePoster.jpg",
        nota: 4
      },
      {
        id: 8,
        titulo: "Forrest Gump",
        genero: "drama",
        descricao: "A vida de um homem simples, mas extraordinário",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/c/c0/ForrestGumpPoster.jpg/150px-ForrestGumpPoster.jpg",
        nota: 5
      },
      {
        id: 9,
        titulo: "Duro de Matar",
        genero: "acao",
        descricao: "Um policial enfrenta terroristas em um arranha-céu",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/2a/Die_hard_poster_promocional.png/150px-Die_hard_poster_promocional.png",
        nota: 4
      },
      {
        id: 10,
        titulo: "Titanic",
        genero: "romance",
        descricao: "Um romance trágico a bordo do famoso navio",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/150px-Titanic_poster.jpg",
        nota: 5
      },
      {
        id: 11,
        titulo: "Gladiador",
        genero: "acao",
        descricao: "A história de um general romano que se torna um gladiador",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/44/GladiadorPoster.jpg/150px-GladiadorPoster.jpg",
        nota: 4
      },
      {
        id: 12,
        titulo: "Simplesmente Acontece",
        genero: "romance",
        descricao: "As vidas entrelaçadas de dois amigos ao longo dos anos",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3e/Love%2C_Rosie.jpg/150px-Love%2C_Rosie.jpg",
        nota: 4
      },
      {
        id: 13,
        titulo: "Clube de Compras Dallas",
        genero: "drama",
        descricao: "A luta de um homem contra a AIDS e a busca por tratamento",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Dallas_Buyers_Club.png/120px-Dallas_Buyers_Club.png",
        nota: 5
      },

      {
        id: 14,
        titulo: "Velozes e Furiosos",
        genero: "acao",
        descricao: "Corridas de carros e ação de alta velocidade",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8f/Fast_and_Furious_Poster.jpg/230px-Fast_and_Furious_Poster.jpg",
        nota: 4,
      },
]
  
 
      const criticas =[
       { id: 1,
        id_filme: 1,
        nome: "Maria",
        critica: "Matrix é um filme incrível que nos mergulha em um mundo de realidade virtual e rebeldia contra as máquinas. A trama envolvente e os efeitos visuais revolucionários fazem deste filme uma experiência única.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 2,
        id_filme: 1,
        nome: "Joao",
        critica: "Matrix é uma obra-prima da ficção científica. A narrativa complexa e os conceitos filosóficos explorados são fascinantes. Uma experiência cinematográfica que desafia a mente.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 3,
        id_filme: 2,
        nome: "Maria",
        critica: "Um Amor para Recordar é um filme romântico incrível que captura o coração dos espectadores. A química entre os protagonistas e a história emocionante fazem deste filme um favorito entre os amantes do romance.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 4,
        id_filme: 2,
        nome: "Maria",
        critica: "Uma história de amor comovente que transcende o tempo. Um Amor para Recordar é um filme que aquece o coração e deixa lágrimas nos olhos. Altamente recomendado.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 5,
        id_filme: 3,
        nome: "Joao",
        critica: "Clube da Luta é um filme de ação psicológico que desafia as convenções. A atuação brilhante de Edward Norton e Brad Pitt, juntamente com a reviravolta na trama, fazem deste filme uma obra-prima do cinema.",
        nota: 4,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 6,
        id_filme: 3,
        nome: "Maria",
        critica: "Clube da Luta é uma montanha-russa emocional. A trama ousada e a exploração de temas profundos tornam este filme uma experiência intensa e memorável. Um clássico moderno que deixa o público pensando.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 7,
        id_filme: 4,
        nome: "Maria",
        critica: "Diário de uma Paixão é uma história de amor atemporal que derrete corações. A química entre Ryan Gosling e Rachel McAdams é palpável, e a narrativa emocionante faz deste filme um clássico romântico.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 8,
        id_filme: 4,
        nome: "Joao",
        critica: "Uma jornada emocional que atravessa décadas, Diário de uma Paixão é um filme que toca profundamente o coração. Uma história de amor cativante e inesquecível.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 9,
        id_filme: 5,
        nome: "Maria",
        critica: "Cisne Negro é uma obra-prima do cinema. A atuação impressionante de Natalie Portman e a narrativa sombria e envolvente fazem deste filme uma experiência única e perturbadora.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 10,
        id_filme: 5,
        nome: "Joao",
        critica: "Cisne Negro é um mergulho profundo na psique de uma bailarina em busca da perfeição. A atmosfera tensa e os momentos de suspense tornam este filme uma jornada emocional intensa e inesquecível.",
        nota: 4,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 11,
        id_filme: 6,
        nome: "Maria",
        critica: "Mad Max: Estrada da Fúria é uma montanha-russa de ação pós-apocalíptica. A ação frenética e as cenas de perseguição são de tirar o fôlego. Um verdadeiro espetáculo cinematográfico.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 12,
        id_filme: 6,
        nome: "Joao",
        critica: "Uma viagem alucinante pelo deserto pós-apocalíptico, Mad Max: Estrada da Fúria é uma experiência visual impressionante. Uma obra de arte do gênero de ação.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 13,
        id_filme: 7,
        nome: "Maria",
        critica: "O Diário de Bridget Jones é uma comédia romântica encantadora. A personagem de Bridget é hilária e cativante, e suas desventuras amorosas são muito divertidas de assistir.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 14,
        id_filme: 7,
        nome: "Joao",
        critica: "Bridget Jones é uma personagem adorável e suas trapalhadas amorosas são hilariantes. O Diário de Bridget Jones é uma comédia romântica que aquece o coração.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 15,
        id_filme: 8,
        nome: "Maria",
        critica: "Forrest Gump é um filme emocionante que narra a vida de um homem extraordinário de maneira tocante. A atuação de Tom Hanks é excepcional, e a narrativa é comovente.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 16,
        id_filme: 8,
        nome: "Joao",
        critica: "Uma jornada através da história americana, Forrest Gump é uma obra-prima do cinema. A história de superação de Forrest é inspiradora e comovente.",
        nota: 4,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 17,
        id_filme: 9,
        nome: "Maria",
        critica: "Duro de Matar é um clássico de ação repleto de adrenalina. Bruce Willis como John McClane é icônico, e a ação ininterrupta é eletrizante.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 18,
        id_filme: 9,
        nome: "Joao",
        critica: "A estreia de John McClane é uma montanha-russa de ação implacável. Duro de Matar é um filme de ação que estabeleceu um padrão para o gênero.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 19,
        id_filme: 10,
        nome: "Maria",
        critica: "Titanic é um épico romântico que emociona o público. A história trágica de Jack e Rose a bordo do navio é inesquecível, e as performances são cativantes.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 20,
        id_filme: 10,
        nome: "Joao",
        critica: "Um romance trágico que transcende o tempo, Titanic é uma obra-prima do cinema. A tragédia do navio é arrebatadora, e as atuações são memoráveis.",
        nota: 4,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 21,
        id_filme: 11,
        nome: "Maria",
        critica: "Gladiador é um filme de ação e drama épico. A jornada de Maximus é poderosa, e as cenas de luta no Coliseu são espetaculares. Um clássico moderno.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 22,
        id_filme: 11,
        nome: "Joao",
        critica: "A saga de Maximus é uma epopeia impressionante. Gladiador é um filme que combina ação espetacular com um enredo emocionalmente envolvente. Imperdível.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 23,
        id_filme: 12,
        nome: "Maria",
        critica: "Simplesmente Acontece é uma história emocionante e engraçada sobre a vida e o amor ao longo dos anos. Os personagens são cativantes e a narrativa é envolvente.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 24,
        id_filme: 12,
        nome: "Joao",
        critica: "As vidas entrelaçadas de Rosie e Alex são acompanhadas de perto em Simplesmente Acontece. Uma história de amor e amizade que atravessa décadas.",
        nota: 5,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 25,
        id_filme: 13,
        nome: "Maria",
        critica: "Clube de Compras Dallas é um filme poderoso que aborda questões profundas de saúde e preconceito. A atuação de Matthew McConaughey é incrível e a história é comovente.",
        nota: 5,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 26,
        id_filme: 13,
        nome: "Joao",
        critica: "Uma história verídica de coragem e luta, Clube de Compras Dallas é um filme que deixa uma impressão duradoura. Matthew McConaughey entrega uma atuação inesquecível.",
        nota: 4,
        perfil: "https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
      {
        id: 27,
        id_filme: 14,
        nome: "Maria",
        critica: "Velozes e Furiosos é uma franquia de ação repleta de corridas emocionantes e cenas de alta velocidade. A adrenalina não para, e os fãs de ação vão adorar.",
        nota: 4,
        perfil: "https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo-768x576.jpg"
      },
      {
        id: 28,
        id_filme: 14,
        nome: "Joao",
        critica: "Velozes e Furiosos é um espetáculo de ação de alta octanagem. As corridas e as manobras ousadas são a marca registrada da franquia. Diversão garantida para os amantes de adrenalina.",
        nota: 5,
        perfil:"https://lenscope.com.br/blog/wp-content/uploads/2023/03/retrato-de-bonito-sorridente-elegante-hipster-lambersexual-modelo-homem-moderno-vestido-com-camisa-azul-moda-masculina-posando-no-fundo-da-rua-perto-de-arranha-ceus-em-oculos-de-sol-768x512.jpg"
      },
    ];
    


  
  
  
 
;

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