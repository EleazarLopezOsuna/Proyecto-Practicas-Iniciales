"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrerasController_1 = __importDefault(require("../controllers/carrerasController"));
class CarrerasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', carrerasController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.get('/:id', carrerasController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdCarrera": int(2),
                "Nombre": string(64)
            }
         */
        this.router.post('/', carrerasController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdCarrera": int(2),
                "Nombre": string(64)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.put('/:id', carrerasController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.delete('/:id', carrerasController_1.default.delete);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
