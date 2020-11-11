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
class CursosAprobadosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const CursosAprobados = yield database_1.default.query('SELECT * FROM CursosAprobados');
            res.json(CursosAprobados);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ca } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', [id, ca]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "El curso " + id + " no existe para el usuario " + ca });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Cod = JSON.stringify(req.body.CodigoCurso);
            const Carnet = JSON.stringify(req.body.Carnet);
            var usuarios = (yield database_1.default.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ' + Cod + ' AND Carnet = ' + Carnet));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO CursosAprobados set ?', [req.body]);
                res.json({ Text: 'Curso ' + Cod + ' agregado para el usuario ' + Carnet });
            }
            else {
                res.status(404).json({ Text: "El curso ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ca } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', [id, ca]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE CursosAprobados set ? WHERE CodigoCurso = ? AND Carnet = ?', [req.body, id]);
                res.json({ Text: "El curso fue actualizado" });
            }
            else {
                res.status(404).json({ Text: "El curso no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { ca } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', [id, ca]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', [id, ca]);
                res.json({ Text: 'Curso ' + id + ' Eliminado' });
            }
            else {
                res.status(404).json({ Text: "El curso no existe" });
            }
        });
    }
}
const cursosAprobadosController = new CursosAprobadosController();
exports.default = cursosAprobadosController;
