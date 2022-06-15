import './App.css';
import Button from './components/Button';
import DropZone from './components/DropZone';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <div className="App">
        <>
          <div className = 'dropZone-container'>
            <DropZone/>

            <Button 
              text = 'Subir tus archivos' /> 
          </div>

          <div className = 'login-welcome-container'>
            <h2>Bienvenido a DDrop</h2>
            <h6>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
            <hr className = 'line' />
            <LoginButton
              className = 'login-container'
              text = 'Login con Google'/>
          </div>
        </>

    </div>
          

  );
}

export default App;
