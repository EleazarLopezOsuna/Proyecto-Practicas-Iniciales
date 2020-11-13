import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Toolbar(){
return(
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  
    <button class="btn btn-success" type="submit">Inicio</button>
    <button class="btn btn-success" type="submit">Perfil</button>
 
</nav>
);

}

function Body(){
  return(
    <div class="row">
      

      <div class="col-md-6 mt-4 text-center">
        <table class="table table-striped table-bordered">
          <tr>
            <th>Codigo</th>
            <th>Curso</th>
            <th>Nota</th>
          </tr>
         
        </table>
      </div>

      <div className="col-md-6 mt-4 card">
        <form className="card-body">
          <h3 class="card-title">Agregar curso</h3>
          <div class="form-group">
            <input name="Curso" type="text" class="form-control" placeholder="Nuevo curso"></input>
          </div>
          <div class="form-group">
            <input name="Nota" type="text" class="form-control" placeholder="Nota"></input>
          </div>
          <input type="Submit" class="btn btn-success"></input>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <div><Toolbar></Toolbar><Body></Body></div>
    
  );
}

export default App;
