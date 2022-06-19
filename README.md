# 📸  DDROP  📸

## USAGE
<img width="1516" alt="Captura de Pantalla 2022-06-19 a las 19 51 45" src="https://user-images.githubusercontent.com/99019637/174497041-f4f8a1eb-2dcb-474b-a860-1aa0deb0e232.png">

<img width="1511" alt="Captura de Pantalla 2022-06-19 a las 19 52 01" src="https://user-images.githubusercontent.com/99019637/174497039-85504fbc-3a7e-496c-88fa-ab560c8e4960.png">
<img width="1044" alt="Captura de Pantalla 2022-06-19 a las 21 09 29" src="https://user-images.githubusercontent.com/99019637/174497046-ba1cb496-3ece-47c4-82d0-cc22fd421a10.png">
<img width="1526" alt="Captura de Pantalla 2022-06-19 a las 19 52 23" src="https://user-images.githubusercontent.com/99019637/174497058-2e11bd33-4780-42e0-922c-43d5633c0a63.png">


## ⌛ SOBRE EL PROYECTO ⌛
Este es un proyecto que forma parte de la fase online de la Hackathon que se organiza en el marco del proyecto BCN Inclusive Coding. 

El reto consiste en resolver un encargo antes del 19 de junio de 2022, con el objetivo de mejorar la experiencia de usuario al subir arhivos a una web y, como extra, hacer que estos se puedan conectar con la API de Google Drive.

#### Las historias de usuarix son las siguientes:
- Desarrollar las vistas que se observan más arriba.
- Crear las vistas de Login y Register y que redirijan a la vista que hemos hecho anteriormente.
- Finalmente, hacer el deploy del proyecto.

#### REQUISITOS EXTRAS

- Permitir al usuario agregar archivos a su cuenta de Google Drive a través de la API de Google (es posible utilizar librerías, no es necesario la implementación directa de la API)
- Mejorar el diseño y hacerlo responsive
- Se pueden implementar todo tipo de animaciones
- Podéis escoger los colores, tipografía e iconos que queráis
- podéis modular las cards y estructura a vuestro gusto. Si lo hacéis incluid una foto del prototipo si es que lo hacéis a través de un diseño previo de Figma, Sketch, etc.
- Añadir al readme la calidad de código que devuelve alguna de las siguientes plataformas: Codefactor, Sonarcloud o alguna otra que os guste más.

## 📄 DOCUMENTATION 📄
#### Tecnologías utilizadas
- React
- CSS
- React Drive Api Picker
- React Dropzone

#### Por qué estas tecnologías
- **React:** Porque puedo basar el diseño del front a partir de componentes, por lo cual me ahorro sobreescribir código reutilizando componentes.

- **CSS:** Podría haber usado frameworks como Tailwind pero he decidido utilizar CSS porque al habernos dado el esbozo del front en Figma, este permite inspeccionar el elemento y ver sus características en CSS, por lo cual ahorraría ese tiempo de ir viendo qué estilos tienen sobre la marcha, y al ser una hackathon, es importante ahorrarse tiempo en x cosas para poder completar otras. La segunda 

- **React Drive Api Picker:** Es la API que he utilizado para poder subir archivos desde tu propia cuenta de Google Drive.

- **React Dropzone:** Es el hook utilizado para crear el componente y funciones del dropzone.

- **React Router Dom:** Para poder crear las rutas .

#### Distribución de carpetas y arquitectura
El proyecto cuenta con 4 carpetas principales:
- **components:** Donde se encuentran todos los componentes creados para luego irlos utilizando según necesitemos en las vistas
- **images:** En donde se encuentran todas las imagenes, en este caso, solo una.
- **stylesheets:** En donde se encuentran todos los archivos css de los componentes y vistas. Importante destacar que el naming entre el componente y su CSS es exactamente el mismo para de esta forma encontrarlo de forma más rápida y lógica.
- **views:** En donde se encuentran las vistas, en este caso, la vista de Login y la vista de Home.

En la raiz de la carpeta SRC, se encuentra el App.js, en donde se encuentran las rutas de la página para indicar qué vista queremos que se muestre según el path marcado.


#### Animación componentes
Los botones y los inputs del login cuentan con hovers y cambios de estilo al hacer clic o pasar por encima de ellos con el ratón.


## ⚙️ Cloning repository ⚙️
Si quieres clonar el reposiitorio, ejecuta el siguiente comando:
`$ git clone https://github.com/itsberriver/dropZone-hackathon.git`

Si quieres ver el resultado sin tener que clonarlo, puedes verlo clicando aquí.: https://drop-zone-hackathon.vercel.app/

## ⚒️ Installing Modules ⚒️
Para ver el proyecto, necesitaras ejecutar los siguientes comandos para instalar las dependencias utilizadas y de esta forma poder tener el proyecto con todas sus funciones y vistas correctamente.

 `npm install`
 
 `$ npm install --save react-dropzone`
 
 `$ npm i react-google-drive-picker`

 `$ npm install react-router-dom@6`

## 💻 Run the project 💻
Para poder abrir ver la página, ejecuta el siguiente comando:

 `npm start`

La aplicación se cargará automáticamente en tu buscador configurado por defecto en tu dispositivo y será ejecutado en tu localhost.

## 🧰 Tools that made possible this project 🧰
- HTML
- CSS
- GitHub
- Figma
- VScode
- React
- Javascript
- Github Pages
- Google Drive
- React-router-dom
- React-google-drive-picker
- React-dropzone

## 👩‍💻 Developer 👩‍💻
- [Jessica berriver](https://github.com/itsberriver) ( [ Linkedin here ](https://www.linkedin.com/in/jessicaberriver/))

## ✅ CALIDAD DE CÓDIGO ✅
<img width="2203" alt="Captura de Pantalla 2022-06-19 a las 21 15 39" src="https://user-images.githubusercontent.com/99019637/174497031-781a6117-e72a-4ab5-a0ec-6aa86261488b.png">


## 👐 AGRADECIMIENTOS 👐
 A Barcelona Digital Talent  y Creu Roja por organizar esta Hackathon y darnos oportunidad a los junior a ser visibilizados por alrededor de 25 empresas. A Mobile World Capital y a Nuewe por impulsar esta Hackathon.Finalmente a Factoria F4, por ser el centro donde me estoy formando y el cual participa en esta hackathon como centro formador.
 

