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
        this.router.get('/', comentariosController_1.default.list);
        this.router.get('/Usuario/:id', comentariosController_1.default.getUsuario);
        this.router.get('/Publicacion/:id', comentariosController_1.default.getPublicacion);
        this.router.post('/', comentariosController_1.default.create);
        this.router.put('/:id', comentariosController_1.default.update);
        this.router.delete('/:id', comentariosController_1.default.delete);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
