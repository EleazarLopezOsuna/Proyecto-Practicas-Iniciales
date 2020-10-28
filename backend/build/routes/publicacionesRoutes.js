"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionesController_1 = __importDefault(require("../controllers/publicacionesController"));
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', publicacionesController_1.default.list);
        this.router.get('/:id', publicacionesController_1.default.getOne);
        this.router.post('/', publicacionesController_1.default.create);
        this.router.put('/:id', publicacionesController_1.default.update);
        this.router.delete('/:id', publicacionesController_1.default.delete);
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
