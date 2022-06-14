import './App.css';
import Button from './components/Button';
import DropZone from './components/DropZone';
import LoginButton from './components/LoginButton';

function App() {
  return (

      <div className="App">
          <DropZone/>

          <Button 
            text = 'Subir tus archivos' /> 

          <LoginButton > Login con Google</LoginButton>

          
      </div>

  );
}

export default App;
