import React from "react"
import DropZoneComponent from "../components/DropZoneComponent"
import useDrivePicker from "react-google-drive-picker"
import LoginButton from "../components/GoogleComponent"
import  { useEffect } from "react"


function Home() {

	const [openPicker, data] = useDrivePicker()

	const handleOpenPicker = () => {
		openPicker({
        clientId: "390878779732-i18ntunhssrgm4kkt9ib523m2qvoouod.apps.googleusercontent.com",
        developerKey: "AIzaSyDPBE94MAvI1gy9rSlMPnulzhbgjjkrNr8",
        refresh_token: "1//04_G1CNDc_RxRCgYIARAAGAQSNwF-L9IrJSOmganHV1KVSCt0Q8-47BeOpdSKJqkl0W1CK8fsOYMdPpByyiZdNKkLFXWDkUageIg",
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
    <>
    <div className = 'dropZone-container'>
        <div className = 'green-container'/>
            <DropZoneComponent />
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

	)
}

export default Home