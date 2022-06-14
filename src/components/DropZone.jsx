import React from 'react';
import '../stylesheets/DropZone.css';
import FileBackground from '../images/fileBackground.png'

function DropZone(){
    return(
        <div className = 'dropzone-container'>
            <p> ARASTRA TUS ARCHIVOS AQUÍ </p>
            <img
            className = 'fileBackground-image'
            src = {FileBackground} />

        </div>
    );
}

export default DropZone;