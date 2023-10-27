import './App.css';
import { RouterApp } from './routes';
import Header from "./header/Header";
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
       <Header />
      <RouterApp/>
      <Footer/>
    </div>
  );
}

export default App;
