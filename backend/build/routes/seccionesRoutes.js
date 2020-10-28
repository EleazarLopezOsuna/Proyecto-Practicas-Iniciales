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
        this.router.get('/', seccionesController_1.default.list);
        this.router.get('/:id', seccionesController_1.default.getOne);
        this.router.post('/', seccionesController_1.default.create);
        this.router.put('/:id', seccionesController_1.default.update);
        this.router.delete('/:id', seccionesController_1.default.delete);
    }
}
const seccionesRoutes = new SeccionesRoutes();
exports.default = seccionesRoutes.router;
