import './App.css';
import Button from './components/Button';
import DropZoneComponent from './components/DropZoneComponent';
import LoginButton from './components/LoginButton';
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker';
import React, {useCallback} from 'react'



function App() {

  const [openPicker, data, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "390878779732-ihu8an4kit03pgvd3dot4pfpmf51m32h.apps.googleusercontent.com",
      developerKey: "AIzaSyAFl2nbR88tJJERFjYV3Nn2oEqcwnE4UkM",
      token: "ya29.a0ARrdaM-bTYERtanoMQPpAeWqZKxOZbUuZyNhnoYdvorXJoUXrzakaOuguXfiyetnUoSQrigm3aYcBw6IPKv3iZY93RWFjsslzr4vjITPEcfzK-zNYMjP-7uWMshJOZFeXZ__KbXZgEqmRVJMU_pV1-auHf05",
      viewId: "DOCS_IMAGES_AND_VIDEOS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    })
    }

    useEffect( () => {
      if (data){
        data.docs.map((i) => console.log(i))
      }
    },[data])



  return (
    <div className="App">
        <>
          <div className = 'dropZone-container'>
            <div className = 'green-container'>
            </div>

              <DropZoneComponent/>

              <Button 
                text = 'Subir tus archivos' /> 
          </div>

          <div className = 'login-welcome-container'>
            <h2>Bienvenido a DDrop</h2>
            <h6>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
            <hr className = 'line' />
            <LoginButton
              className = 'login-container'
              text = 'Login con Google'
              onClick = {()=>handleOpenPicker()} />
          </div>
        </>

    </div>
          

  );
}

export default App;
