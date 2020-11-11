"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pensumsController_1 = __importDefault(require("../controllers/pensumsController"));
class PensumsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pensumsController_1.default.list);
        this.router.get('/:id/:cod', pensumsController_1.default.getOne);
        this.router.post('/', pensumsController_1.default.create);
        this.router.put('/:id/:cod', pensumsController_1.default.update);
        this.router.delete('/:id/:cod', pensumsController_1.default.delete);
    }
}
const pensumsRoutes = new PensumsRoutes();
exports.default = pensumsRoutes.router;
