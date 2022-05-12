import './App.css';
import { Navbar } from './features/navbar';
import { Router } from './routes/Router';
import { useState } from 'react';
import { ToggleContext } from './context/ToggleContext';

function App() {
  const [listaDeCapturados, setListaDeCapturados] = useState([]);
  const [contextValue, setContextValue] = useState('Valor inicial del provider');

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
    <ToggleContext.Provider
      value={{
        value: contextValue,
        setContext: setContextValue,
      }}>
      <div className="App">
        <Navbar listaDeCapturados={leerListaCapturados()} />
        <Router
          listaDeCapturados={leerListaCapturados()}
          setListaDeCapturados={sobreescribirlistaCapturados}
        />
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
