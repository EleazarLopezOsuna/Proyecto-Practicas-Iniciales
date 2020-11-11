"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ComentariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Comentarios = yield database_1.default.query('SELECT * FROM Comentarios');
            res.json(Comentarios);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Comentarios set ?', [req.body]);
            res.json({ Text: 'Comentario creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Comentarios WHERE IdComentario = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Comentarios set ? WHERE IdComentario = ?', [req.body, id]);
                res.json({ Text: "El comentario fue actualizada" });
            }
            else {
                res.status(404).json({ Text: "El comentario no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Comentarios WHERE IdComentario = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Comentarios WHERE IdComentario = ?', [id]);
                res.json({ Text: 'Carrera ' + id + ' Eliminada' });
            }
            else {
                res.status(404).json({ Text: "El comentario no existe" });
            }
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Comentarios WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "El comentario no existe" });
            }
        });
    }
    getPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Comentarios WHERE IdPublicacion = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "El comentario no existe" });
            }
        });
    }
}
const comentariosController = new ComentariosController();
exports.default = comentariosController;
