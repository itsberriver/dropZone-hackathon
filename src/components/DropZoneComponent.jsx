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
            <img src={file.preview} style={{width:'500px', heigth: '500px'}} alt='upload pic' />
        </div>
    ))

	return (
		<>
		<form className="image-dragged">{choosedImages}</form>
		<div className = 'default-container'{...getRootProps()}>
			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>

			<input  {...getInputProps()} />

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