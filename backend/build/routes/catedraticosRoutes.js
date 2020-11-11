"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catedraticosController_1 = __importDefault(require("../controllers/catedraticosController"));
class CatedraticosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', catedraticosController_1.default.list);
        /*  No hay que mandar nada, retorna JSON.
         *  /:nombre/:apellido indica que la direccion tiene que ser del tipo
         *  localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.get('/:nombre/:apellido', catedraticosController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Nombres": string(64),
                "Apellidos": string(64)
            }
         */
        this.router.post('/', catedraticosController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Nombres": string(64),
                "Apellidos": string(64)
            }

            /:nombre/:apellido indica que la direccion tiene que ser del tipo
            localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.put('/:nombre/:apellido', catedraticosController_1.default.update);
        /*  No hay que mandar nada, retorna JSON.
         *  /:nombre/:apellido indica que la direccion tiene que ser del tipo
            localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.delete('/:nombre/:apellido', catedraticosController_1.default.delete);
    }
}
const catedraticosRoutes = new CatedraticosRoutes();
exports.default = catedraticosRoutes.router;
