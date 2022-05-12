import './App.css';
import { Navbar } from './features/navbar';
import { Router } from './routes/Router';
import { useState } from 'react';

function App() {
  const [listaDeCapturados, setListaDeCapturados] = useState([]);

  const leerListaCapturados = () => {
    if (!listaDeCapturados?.length && localStorage.listaDeCapturados?.length) {
      const parsedList = JSON.parse(localStorage.listaDeCapturados);
      setListaDeCapturados(parsedList);
      return parsedList;
    }
    return listaDeCapturados;
  };

  const sobreescribirlistaCapturados = nuevaLista => {
    localStorage.listaDeCapturados = JSON.stringify(nuevaLista);
    setListaDeCapturados(nuevaLista);
  };

  return (
    <div className="App">
      <Navbar listaDeCapturados={leerListaCapturados()}>
      </Navbar>
      <Router
        listaDeCapturados={leerListaCapturados()}
        setListaDeCapturados={sobreescribirlistaCapturados}
      />
    </div>
  );
}

export default App;
