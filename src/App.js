import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1 className='h1'>Testimonio de nuestros clientes:</h1>
      <Testimonio 
      nombre='Mary Jones'
      pais='Suecia'
      imagen='mary'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      />
      <Testimonio 
      nombre='Fatima Rubin'
      pais='Turquía'
      imagen='fatima'
      cargo='Desarrollador AWS'
      empresa='Amazon'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    />
     <Testimonio 
      nombre='Sarah Lee'
      pais='India'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='ChatDesk'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    />
      </div>
    </div>
  );
}

export default App;
