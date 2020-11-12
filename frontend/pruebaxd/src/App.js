import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

function Toolbar(){
  return(
    <div className = "App" class="toolbar" role="banner">
        <ul class="nav">
          <li><a href="">Inicio</a></li>
          <li><a href="">Para Alumnos</a>
            <ul>          
              <li><a href="">Informacion</a></li>
              <li><a href="../app/nuevo/nuevo.component.html">Registro</a></li>
            </ul>
            </li>
          <li><a href="">Contacto</a></li>
        </ul>
      </div>
  )
}



function Datos(){
  return(
    <div class="login"> 
      <form class="custom-form" method="post" align="center">
      <img src="https://proxy.ingenieria.usac.edu.gt/autenticacion/XUI/images/login-logo.png?v=13.0.0" width="325"></img>
      <input type="text" name="email" placeholder="Registro Academico" required="required"/>
      <input type="password" name="password" placeholder="Contraseña" required="required"/>
      <button type="submit" >Ingresar</button>
      <button type="submit" >Olvide mi Contraseña</button>
      </form>
    </div>
    
  )
}

class App extends Component{
  render(){
    return(
      <div><Toolbar></Toolbar><Datos/></div>
      
    )
  }
}


export default App;
