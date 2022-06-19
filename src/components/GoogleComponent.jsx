import React from "react"
import "../stylesheets/GoogleComponent.css"
import GoogleLogo from "../images/googleLogo.png"


function GoogleComponent ({ text, onClick }){
	return(
		<button 
			className = 'login-button' 
			onClick = {onClick}>
			<img 
				className = 'google-logo'
				src = {GoogleLogo} 
				alt = 'google logo' /> 
			{text}
		</button>
	)
}

export default GoogleComponent