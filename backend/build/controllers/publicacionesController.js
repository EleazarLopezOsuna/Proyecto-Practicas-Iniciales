"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PublicacionesController {
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
const publicacionesController = new PublicacionesController();
exports.default = publicacionesController;
