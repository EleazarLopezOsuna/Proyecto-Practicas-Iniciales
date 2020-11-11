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
class PublicacionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Publicaciones = yield database_1.default.query('SELECT * FROM Publicaciones');
            res.json(Publicaciones);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Publicaciones set ?', [req.body]);
            res.json({ Text: 'publicacion Creada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE IdPublicacion = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Publicaciones set ? WHERE IdPublicacion = ?', [req.body, id]);
                res.json({ Text: "La publicacion fue actualizada" });
            }
            else {
                res.status(404).json({ Text: "La publicacion no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE IdPublicacion = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Publicaciones WHERE IdPublicacion = ?', [id]);
                res.json({ Text: 'publicacion ' + id + ' Eliminada' });
            }
            else {
                res.status(404).json({ Text: "La publicacion no existe" });
            }
        });
    }
    getCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE CodigoCurso = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen publicaciones" });
            }
        });
    }
    getCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE IdCatedratico = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen publicaciones" });
            }
        });
    }
    getSeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE IdSeccion = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen publicaciones" });
            }
        });
    }
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Publicaciones WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen publicaciones" });
            }
        });
    }
}
const publicacionesController = new PublicacionesController();
exports.default = publicacionesController;
