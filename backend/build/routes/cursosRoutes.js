"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cursosController_1 = __importDefault(require("../controllers/cursosController"));
class CursosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', cursosController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.get('/:id', cursosController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "CodigoCurso": int,
                "Nombres": string(64)
            }
         */
        this.router.post('/', cursosController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "CodigoCurso": int,
                "Nombres": string(64)
            }
            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.put('/:id', cursosController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.delete('/:id', cursosController_1.default.delete);
    }
}
const cursosRoutes = new CursosRoutes();
exports.default = cursosRoutes.router;
