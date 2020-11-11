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
        this.router.get('/', catedraticosController_1.default.list);
        this.router.get('/:nombre/:apellido', catedraticosController_1.default.getOne);
        this.router.post('/', catedraticosController_1.default.create);
        this.router.put('/:nombre/:apellido', catedraticosController_1.default.update);
        this.router.delete('/:nombre/:apellido', catedraticosController_1.default.delete);
    }
}
const catedraticosRoutes = new CatedraticosRoutes();
exports.default = catedraticosRoutes.router;
