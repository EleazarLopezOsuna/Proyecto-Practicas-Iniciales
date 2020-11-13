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
      <form class="custom-form" method="post" align="left">
      <img src="https://proxy.ingenieria.usac.edu.gt/autenticacion/XUI/images/login-logo.png?v=13.0.0" width="150"></img>      
      
      
<label class="container">Tipo de Publicacion:</label>

<label class="container">Catedratico</label>
<input type ="checkbox" cheked="cheked"></input>
<span class="checkmark"></span>

<label class="container">Curso</label>
<input type ="checkbox" cheked="cheked"></input>
<span class="checkmark"></span>

<label class="container">Catedratico de un Curso</label>
<input type ="checkbox" cheked="cheked"></input>
<span class="checkmark"></span>

      
      <select>
    <option value="0">Selecciona un ingeniero:</option>
    <option value="1">Ingeniero Sergio Gomez</option>
    <option value="2">Ingeniero Carlos Jimenez</option>
  </select>

      <input type="text" name="publicacion" placeholder="Ingresar el mensaje para tu publicacion" required="required"/>
      <button type="submit"> Publicar</button>  


     <br></br>
     <br></br>
     <br></br>
     <br></br>

     <textarea name="comentarios" rows="10" cols="40" align="center">Escribe aquí tus comentarios</textarea>
     <br></br>
     <br></br>
     <button type="submit"> Dejar Comentario</button> 
     <br></br>
     <button type="submit"> Ver Perfil</button> 
     <br></br>
     <button type="submit">Cancelar</button> 
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
