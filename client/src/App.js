import './App.css';
import { RouterApp } from './routes';
import Header from "./header/Header";

function App() {
  return (
    <div className="App">
       <Header />
      <RouterApp/>
    </div>
  );
}

export default App;
