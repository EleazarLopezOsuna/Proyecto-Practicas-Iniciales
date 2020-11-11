"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosAprobadosController_1 = __importDefault(require("../controllers/cursosAprobadosController"));
class CursosAprobadosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', cursosAprobadosController_1.default.list);
        /*  No hay que mandar nada, retorna JSON.
         *  /:id/:ca indica que la direccion tiene que ser del tipo
         *  localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.get('/:id/:ca', cursosAprobadosController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "CodigoCurso": int,
                "Carnet": int(9),
                "Nota": int
            }
         */
        this.router.post('/', cursosAprobadosController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "CodigoCurso": int,
                "Carnet": int(9),
                "Nota": int
            }

            /:id/:ca indica que la direccion tiene que ser del tipo
            localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.put('/:id/:ca', cursosAprobadosController_1.default.update);
        /* No hay que mandar nada, retorna JSON.
            /:id/:ca indica que la direccion tiene que ser del tipo
            localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.delete('/:id/:ca', cursosAprobadosController_1.default.delete);
    }
}
const cursosAprobadosRoutes = new CursosAprobadosRoutes();
exports.default = cursosAprobadosRoutes.router;
