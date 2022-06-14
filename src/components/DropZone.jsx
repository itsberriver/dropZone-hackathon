import React from 'react';
import '../stylesheets/DropZone.css';
import FileBackground from '../images/fileBackground.png'

function DropZone(){
    return(
        <div className = 'dropzone-container'>
            <p> ARRASTRA TUS ARCHIVOS AQUÍ </p>
            <img
            className = 'fileBackground-image'
            src = {FileBackground} 
            alt = 'background for the dropzone container'/>

        </div>
    );
}

export default DropZone;