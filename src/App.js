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

          <LoginButton
          className = 'login-container'
          text = 'Login con Google'/>

          
      </div>

  );
}

export default App;
