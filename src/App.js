import "./App.css"
import React from "react"
import { BrowserRouter,Link,Routes, Route} from 'react-router-dom';
import Home from './views/Home'
import Login from './views/Login'


function App() {

	return (
		<div className="App">
      <BrowserRouter>
        <header > 
          <Link to='/' ></Link>
          <Link to='/login'></Link>
          <Link to='/home'></Link>
        </header>

        <Routes>
            <Route exact path="/" element={ <Login/> } />
            <Route exact path="/login" element={ <Login />} />
            <Route exact path="/home" element={ <Home />} />
    
          </Routes>


        </BrowserRouter>

		</div>
	)
}

export default App