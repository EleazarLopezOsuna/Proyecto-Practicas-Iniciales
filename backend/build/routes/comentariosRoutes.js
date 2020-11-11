"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentariosController_1 = __importDefault(require("../controllers/comentariosController"));
class ComentariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', comentariosController_1.default.list);
        /* No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Comentarios/identificador
         */
        this.router.get('/Usuario/:id', comentariosController_1.default.getUsuario);
        /* No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Comentarios/identificador
         */
        this.router.get('/Publicacion/:id', comentariosController_1.default.getPublicacion);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdPublicacion": int,
                "Carnet": int(9),
                "Mensaje": string(256)
            }
         */
        this.router.post('/', comentariosController_1.default.create);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "IdPublicacion": int,
                "Carnet": int(9),
                "Mensaje": string(256)
            }

            /:nombre/:apellido indica que la direccion tiene que ser del tipo
            localhost:8000/api/Comentarios/identificador
         */
        this.router.put('/:id', comentariosController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Comentarios/identificador
         */
        this.router.delete('/:id', comentariosController_1.default.delete);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
