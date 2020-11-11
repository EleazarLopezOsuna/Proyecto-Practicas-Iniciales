"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //No hay que mandar nada, retorna JSON
        this.router.get('/', usuariosController_1.default.list);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/carnet
         */
        this.router.get('/:id', usuariosController_1.default.getOne);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Carnet": int(9),
                "Nombres": string(64),
                "Apellidos": string(64),
                "Password": string(64),
                "Correo": string(64),
            }
         */
        this.router.post('/', usuariosController_1.default.create);
        /*No hay que mandar nada, retorna JSON.
         * /:id/:pw indica que la direccion tiene que ser del tipo
         * localhost:8000/api/Usuarios/carnet/password
         */
        this.router.post('/:id/:pw', usuariosController_1.default.login);
        /* Hay que mandar JSON, retorna JSON.
         *  {
                "Carnet": int(9),
                "Nombres": string(64),
                "Apellidos": string(64),
                "Password": string(64),
                "Correo": string(64),
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/carnet
         */
        this.router.put('/:id', usuariosController_1.default.update);
        /*No hay que mandar nada, retorna JSON.
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/identificador
         */
        this.router.delete('/:id', usuariosController_1.default.delete);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
