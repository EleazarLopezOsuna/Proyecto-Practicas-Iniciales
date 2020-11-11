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
class SeccionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Secciones = yield database_1.default.query('SELECT * FROM Secciones');
            res.json(Secciones);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "La seccion no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IdSeccion = JSON.stringify(req.body.IdSeccion);
            var usuarios = (yield database_1.default.query('SELECT * FROM Secciones WHERE IdSeccion = ' + IdSeccion));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Secciones set ?', [req.body]);
                res.json({ Text: 'seccion ' + IdSeccion + ' Creada' });
            }
            else {
                res.status(404).json({ Text: "La seccion ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Secciones set ? WHERE IdSeccion = ?', [req.body, id]);
                res.json({ Text: "La seccion fue actualizada" });
            }
            else {
                res.status(404).json({ Text: "La seccion no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Secciones WHERE IdSeccion = ?', [id]);
                res.json({ Text: 'seccion ' + id + ' Eliminada' });
            }
            else {
                res.status(404).json({ Text: "La seccion no existe" });
            }
        });
    }
    getCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Secciones WHERE CodigoCurso = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen secciones" });
            }
        });
    }
    getCatedratico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Secciones WHERE IdSCatedratico = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario);
            }
            else {
                res.status(404).json({ Text: "No existen secciones" });
            }
        });
    }
}
const seccionesController = new SeccionesController();
exports.default = seccionesController;
