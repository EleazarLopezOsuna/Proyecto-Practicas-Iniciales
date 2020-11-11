"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pensumsController_1 = __importDefault(require("../controllers/pensumsController"));
class PensumsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', pensumsController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * /:id/:cod indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.get('/:id/:cod', pensumsController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdCarrera": int(2),
                "CodigoCurso": int,
                "Creditos": int,
                "Semestre": int
            }
         */
        this.router.post('/', pensumsController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdCarrera": int(2),
                "CodigoCurso": int,
                "Creditos": int,
                "Semestre": int
            }

            localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.put('/:id/:cod', pensumsController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id/:cod indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.delete('/:id/:cod', pensumsController_1.default.delete);
    }
}
const pensumsRoutes = new PensumsRoutes();
exports.default = pensumsRoutes.router;
