"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CursosAprobadosController {
    list(req, res) {
        res.json({ text: 'Lista' });
    }
    getOne(req, res) {
        res.json({ text: 'Objeto unico' });
    }
    create(req, res) {
        res.json({ text: 'Crear' });
    }
    update(req, res) {
        res.json({ text: 'Actualizar' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminar' });
    }
}
const cursosAprobadosController = new CursosAprobadosController();
exports.default = cursosAprobadosController;
