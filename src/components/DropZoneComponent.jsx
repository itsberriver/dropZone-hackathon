import "../stylesheets/DropZoneComponent.css"
import FileBackground from "../images/fileBackground.png"
import React, {useCallback, useState} from "react"
import {useDropzone} from "react-dropzone"
import Button from '../components/Button'


function DropZoneComponent() {

	const [chooseImage, setChooseImage] = useState([]);

	const onDrop = useCallback(acceptedFiles => {
		setChooseImage(acceptedFiles.map(file => 
			Object.assign(file,{
				preview: URL.createObjectURL(file) })
		))
	}, [])

	const {getRootProps, getInputProps} = useDropzone({onDrop})
	
	const choosedImages = chooseImage?.map(file => (
        <div className = "choosed-image-container">
            <img src={file.preview} style={{width:'22rem', heigth: '22rem'}} alt='upload pic' />
        </div>
    ))

	return (
		<>
		<form>{choosedImages}</form>
		<div {...getRootProps()}>
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>

			<input {...getInputProps()} />

			<img
				className = 'fileBackground-image'
				src = {FileBackground} 
				alt = 'background for the dropzone container'/>
			<Button 
            text = 'Subir tus archivos' 
			onClick = {onDrop}/> 
		</div>

		</>

	)
}
export default DropZoneComponent