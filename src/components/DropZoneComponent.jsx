import "../stylesheets/DropZoneComponent.css"
import FileBackground from "../images/fileBackground.png"
import React, {useCallback, useState} from "react"
import {useDropzone} from "react-dropzone"


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
        <div>
            <img src={file.preview} style={{width:'800px', heigth: '500px'}} alt='upload pic' />
        </div>
    ))

	return (
		<div className = 'choosed-image-container'{...getRootProps()}>


			<p> ARRASTRA TUS ARCHIVOS AQUÍ </p>

			<input  {...getInputProps()} />

			<img
				className = 'fileBackground-image'
				src = {FileBackground} 
				alt = 'background for the dropzone container'/>

			<form>{choosedImages}</form>
		</div>

	)
}
export default DropZoneComponent