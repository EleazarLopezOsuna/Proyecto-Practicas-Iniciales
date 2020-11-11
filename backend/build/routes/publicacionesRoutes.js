"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionesController_1 = __importDefault(require("../controllers/publicacionesController"));
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', publicacionesController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * Curso/:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Publicaciones/Curso/identificador
         */
        this.router.get('/Curso/:id', publicacionesController_1.default.getCurso);
        /*No hay que mandar nada, retorna JSON.
         * Curso/:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Publicaciones/Catedratico/identificador
         */
        this.router.get('/Catedratico/:id', publicacionesController_1.default.getCatedratico);
        /*No hay que mandar nada, retorna JSON.
         * Curso/:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Publicaciones/Seccion/identificador
         */
        this.router.get('/Seccion/:id', publicacionesController_1.default.getSeccion);
        /*No hay que mandar nada, retorna JSON.
         * Curso/:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Publicaciones/Usuario/identificador
         */
        this.router.get('/Usuario/:id', publicacionesController_1.default.getUsuario);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Carnet": int(9),
                "CodigoCurso": int                                  PUEDE SER NULO
                "CodigoCatedratico": int,                           PUEDE SER NULO
                "IdSeccion": string(20), //CodigoCurso_Seccion      PUEDE SER NULO
                "Mensaje": string(256),
                "Fecha": date,
                "Tipo": int (1 positivo, 0 negativo)
            }
         */
        this.router.post('/', publicacionesController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Carnet": int(9),
                "CodigoCurso": int                                  PUEDE SER NULO
                "CodigoCatedratico": int,                           PUEDE SER NULO
                "IdSeccion": string(20), //CodigoCurso_Seccion      PUEDE SER NULO
                "Mensaje": string(256),
                "Fecha": date,
                "Tipo": int (1 positivo, 0 negativo)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Publicaciones/identificador
         */
        this.router.put('/:id', publicacionesController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Publicaciones/identificador
         */
        this.router.delete('/:id', publicacionesController_1.default.delete);
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
