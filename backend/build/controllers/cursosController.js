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
class CursosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carreras = yield database_1.default.query('SELECT * FROM Cursos');
            res.json(carreras);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "El curso no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IdCarrera = JSON.stringify(req.body.CodigoCurso);
            var usuarios = (yield database_1.default.query('SELECT * FROM Cursos WHERE CodigoCurso = ' + IdCarrera));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Cursos set ?', [req.body]);
                res.json({ Text: 'Curso ' + IdCarrera + ' Creado' });
            }
            else {
                res.status(404).json({ Text: "El curso ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Cursos set ? WHERE CodigoCurso = ?', [req.body, id]);
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
            const usuario = yield database_1.default.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Cursos WHERE CodigoCurso = ?', [id]);
                res.json({ Text: 'Curso ' + id + ' Eliminado' });
            }
            else {
                res.status(404).json({ Text: "El curso no existe" });
            }
        });
    }
}
const cursosController = new CursosController();
exports.default = cursosController;
