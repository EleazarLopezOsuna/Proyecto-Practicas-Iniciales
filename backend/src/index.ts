//Importamos los modulos que vamos a utilizar
import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

//Importamos los enrutadores que se utilizadan para las peticiones de la API
import carrerasRoutes from './routes/carrerasRoutes';
import catedraticosRoutes from './routes/catedraticosRoutes';
import comentariosRoutes from './routes/comentariosRoutes';
import cursosAprobadosRoutes from './routes/cursosAprobadosRoutes';
import cursosRoutes from './routes/cursosRoutes';
import indexRoutes from './routes/indexRoutes';
import pensumsRoutes from './routes/pensumsRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';
import seccionesRoutes from './routes/seccionesRoutes';
import usuariosRoutes from './routes/usuariosRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();   //Creamos una nueva aplicacion con express
        this.config();          //Llamamos al metodo config para indicar las configuraciones del servidor
        this.routes();          //Generamos los enrutadores de la API con el metodo routes
    }

    config(): void{
        this.app.set('port', process.env.PORT || 8000);     //Definimos el puerto 8000 para el servidor
        this.app.use(morgan('dev'));                        //Hacemos uso de morgan
        this.app.use(cors());                               //Hacemos uso de cors
        this.app.use(express.json());                       //Indicamos que express puede entender json
        this.app.use(express.urlencoded({extended: false})) //Setteamos el urlencoded
    }

    routes(): void{
        //Indicamos como acceder a cada enrutador
        this.app.use('/', indexRoutes);
        this.app.use('/api/carreras', carrerasRoutes);
        this.app.use('/api/catedraticos', catedraticosRoutes);
        this.app.use('/api/comentarios', comentariosRoutes);
        this.app.use('/api/cursosAprobados', cursosAprobadosRoutes);
        this.app.use('/api/cursos', cursosRoutes);
        this.app.use('/api/pensums', pensumsRoutes);
        this.app.use('/api/publicaciones', publicacionesRoutes);
        this.app.use('/api/secciones', seccionesRoutes);
        this.app.use('/api/usuarios', usuariosRoutes);
    }

    start(): void{
        //Iniciamos el servidor y mostramos un mensaje de confirmacion del puerto
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port: ' + this.app.get('port'));
        });
    }

}

//Creamos un nuevo servidor
const server = new Server();

//Iniciamos el servidor
server.start();