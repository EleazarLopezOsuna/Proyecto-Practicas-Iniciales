import logo from './logo.svg';
import './Style.css';
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
      <input class="controls" type="text" name="registro" id="record" placeholder="Registro academico"/>
      <input type="text" name="nombres" id="name" placeholder="Nuevo Nombre"/>
      <input type="text" name="apellidos" id="lastname" placeholder="Nuevo Apellido"/>
      <input type="password" name="contrasen" id="pass" placeholder="Contrasena Nueva"/>
      <input type="password" name="confirmar_contrasena" id="confirm_password" placeholder="Confirmar contrasena"/>
      <input type="email" name="correo" id="mail" placeholder="Nuevo Correo"/>
      <button type="submit" >Modificar</button>
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
