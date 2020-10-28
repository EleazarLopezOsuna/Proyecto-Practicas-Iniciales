"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importamos los modulos que vamos a utilizar
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Importamos los enrutadores que se utilizadan para las peticiones de la API
const carrerasRoutes_1 = __importDefault(require("./routes/carrerasRoutes"));
const catedraticosRoutes_1 = __importDefault(require("./routes/catedraticosRoutes"));
const comentariosRoutes_1 = __importDefault(require("./routes/comentariosRoutes"));
const cursosAprobadosRoutes_1 = __importDefault(require("./routes/cursosAprobadosRoutes"));
const cursosRoutes_1 = __importDefault(require("./routes/cursosRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const pensumsRoutes_1 = __importDefault(require("./routes/pensumsRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const seccionesRoutes_1 = __importDefault(require("./routes/seccionesRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default(); //Creamos una nueva aplicacion con express
        this.config(); //Llamamos al metodo config para indicar las configuraciones del servidor
        this.routes(); //Generamos los enrutadores de la API con el metodo routes
    }
    config() {
        this.app.set('port', process.env.PORT || 8000); //Definimos el puerto 8000 para el servidor
        this.app.use(morgan_1.default('dev')); //Hacemos uso de morgan
        this.app.use(cors_1.default()); //Hacemos uso de cors
        this.app.use(express_1.default.json()); //Indicamos que express puede entender json
        this.app.use(express_1.default.urlencoded({ extended: false })); //Setteamos el urlencoded
    }
    routes() {
        //Indicamos como acceder a cada enrutador
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/carreras', carrerasRoutes_1.default);
        this.app.use('/api/catedraticos', catedraticosRoutes_1.default);
        this.app.use('/api/comentarios', comentariosRoutes_1.default);
        this.app.use('/api/cursosAprobados', cursosAprobadosRoutes_1.default);
        this.app.use('/api/cursos', cursosRoutes_1.default);
        this.app.use('/api/pensums', pensumsRoutes_1.default);
        this.app.use('/api/publicaciones', publicacionesRoutes_1.default);
        this.app.use('/api/secciones', seccionesRoutes_1.default);
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
    }
    start() {
        //Iniciamos el servidor y mostramos un mensaje de confirmacion del puerto
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port: ' + this.app.get('port'));
        });
    }
}
//Creamos un nuevo servidor
const server = new Server();
//Iniciamos el servidor
server.start();
