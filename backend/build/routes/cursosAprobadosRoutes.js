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
        this.router.get('/', cursosAprobadosController_1.default.list);
        this.router.get('/:id/:ca', cursosAprobadosController_1.default.getOne);
        this.router.post('/', cursosAprobadosController_1.default.create);
        this.router.put('/:id/:ca', cursosAprobadosController_1.default.update);
        this.router.delete('/:id/:ca', cursosAprobadosController_1.default.delete);
    }
}
const cursosAprobadosRoutes = new CursosAprobadosRoutes();
exports.default = cursosAprobadosRoutes.router;
