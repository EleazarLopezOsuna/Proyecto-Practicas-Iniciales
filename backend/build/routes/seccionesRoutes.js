"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seccionesController_1 = __importDefault(require("../controllers/seccionesController"));
class SeccionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', seccionesController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.get('/:id', seccionesController_1.default.getOne);
        /*No hay que mandar nada, retorna JSON.
        * Curso/:id indica que la direccion tiene que ser del tipo
        * localhost:8000/api/Secciones/Curso/identificador
        */
        this.router.get('/Curso/:id', seccionesController_1.default.getCurso);
        /*No hay que mandar nada, retorna JSON.
         * Catedratico/:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Secciones/Catedratico/identificador
         */
        this.router.get('/Catedratico/:id', seccionesController_1.default.getCatedratico);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdSeccion": string(20),        Se forma CodigoCurso + Seccion
                "CodigoCurso": int,
                "CodigoCatedratico": int,
                "Seccion": string(2)
            }
         */
        this.router.post('/', seccionesController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdSeccion": string(20),        Se forma CodigoCurso + Seccion
                "CodigoCurso": int,
                "CodigoCatedratico": int,
                "Seccion": string(2)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.put('/:id', seccionesController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.delete('/:id', seccionesController_1.default.delete);
    }
}
const seccionesRoutes = new SeccionesRoutes();
exports.default = seccionesRoutes.router;
