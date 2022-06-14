import './App.css';
import Button from './components/Button.jsx';
import DropZone from './components/DropZone.jsx';

function App() {
  return (
    <div className="App">
      <DropZone/>
      <Button 
        text = 'Subir tus archivos' /> 
      
    </div>
  );
}

export default App;
