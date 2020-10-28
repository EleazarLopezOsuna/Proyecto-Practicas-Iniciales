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
        this.router.get('/', carrerasController_1.default.list);
        this.router.get('/:id', carrerasController_1.default.getOne);
        this.router.post('/', carrerasController_1.default.create);
        this.router.put('/:id', carrerasController_1.default.update);
        this.router.delete('/:id', carrerasController_1.default.delete);
    }
}
const carrerasRoutes = new CarrerasRoutes();
exports.default = carrerasRoutes.router;
