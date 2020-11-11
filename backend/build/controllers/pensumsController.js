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
class PensumsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Pensums = yield database_1.default.query('SELECT * FROM Pensums');
            res.json(Pensums);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { cod } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', [id, cod]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "El curso no existe en este pensum" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IdCarrera = JSON.stringify(req.body.IdCarrera);
            const CodCurso = JSON.stringify(req.body.CodigoCarrera);
            var usuarios = (yield database_1.default.query('SELECT * FROM Pensums WHERE IdCarrera = ' + IdCarrera + ' AND CodigoCurso = ' + CodCurso));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Pensums set ?', [req.body]);
                res.json({ Text: 'Curso ' + CodCurso + ' Creado en Pensum ' + IdCarrera });
            }
            else {
                res.status(404).json({ Text: "El curso no existe en este pensum" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { cod } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', [id, cod]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Pensums set ? WHERE IdCarrera = ? AND CodigoCarrera = ?', [req.body, id, cod]);
                res.json({ Text: "La carrera fue actualizada" });
            }
            else {
                res.status(404).json({ Text: "El curso no existe en este pensum" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { cod } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', [id, cod]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', [id, cod]);
                res.json({ Text: 'Curso ' + cod + ' Eliminada del pensum ' + id });
            }
            else {
                res.status(404).json({ Text: "El curso no existe en este pensum" });
            }
        });
    }
}
const pensumsController = new PensumsController();
exports.default = pensumsController;
