import "./App.css"
import DropZoneComponent from "./components/DropZoneComponent"
import LoginButton from "./components/LoginButton"
import  { useEffect } from "react"
import useDrivePicker from "react-google-drive-picker"
import React from "react"
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Login from './views/Login'


function App() {

	const [openPicker, data] = useDrivePicker()

	const handleOpenPicker = () => {
		openPicker({
			clientId: "390878779732-8k96uil4mokljj2sc35h0s133flfjp1b.apps.googleusercontent.com",
			developerKey: "AIzaSyBxHw68jVuuI97gACQl9jSDY8-mFtr2s2w",
			token: "ya29.a0ARrdaM8nnRnzr_Hst85mqM-KiSYR7JERwmMtGFhhvp8AAEcvk5ZyAVZ_zmyj2aGS9TiG8L0eQed-je3yNB6JHuhojlpCVn2IuXlR9RdwYlIAJvaUOjsG3Hh4088Jlw2e_mswOBWYcLD1BNKNka6cSVOr9UJh",
			viewId: "DOCS",
			showUploadView: true,
			showUploadFolders: true,
			supportDrives: true,
			multiselect: true,
  });
}

useEffect( () => {
    if (data){
      data.docs.map((i) => console.log(i));
    }
  },[data])

	return (
		<div className="App">
      <BrowserRouter>
        <header > 
          <Link to='/' ></Link>
          <Link to='/login'></Link>
        </header>

        <Routes>
            {/* <Route exact path="/" element={ <Home/> } /> */}
            <Route exact path="/login" element={ <Login />} />

    
          </Routes>


        </BrowserRouter>
      <>
          <div className = 'dropZone-container'>
          <div className = 'green-container'>
          </div>
            <DropZoneComponent></DropZoneComponent>
          </div>

          <div className = 'login-welcome-container'>
            <h2>Bienvenido a DDrop</h2>
            <h6>Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
            <hr className = 'line' />
            <LoginButton
              className = 'login-container'
              text = 'Subir archivos desde Drive'
              onClick = {()=>handleOpenPicker()} 
              type = "button"/>
        </div>
			</>

		</div>
	)
}

export default App