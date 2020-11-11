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
class CarrerasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carreras = yield database_1.default.query('SELECT * FROM Carreras');
            res.json(carreras);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "La carrera no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IdCarrera = JSON.stringify(req.body.IdCarrera);
            var usuarios = (yield database_1.default.query('SELECT * FROM Carreras WHERE IdCarrera = ' + IdCarrera));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Carreras set ?', [req.body]);
                res.json({ Text: 'Carrera ' + IdCarrera + ' Creada' });
            }
            else {
                res.status(404).json({ Text: "La carrera ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Carreras set ? WHERE IdCarrera = ?', [req.body, id]);
                res.json({ Text: "La carrera fue actualizada" });
            }
            else {
                res.status(404).json({ Text: "La carrera no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Carreras WHERE IdCarrera = ?', [id]);
                res.json({ Text: 'Carrera ' + id + ' Eliminada' });
            }
            else {
                res.status(404).json({ Text: "La carrera no existe" });
            }
        });
    }
}
const carrerasController = new CarrerasController();
exports.default = carrerasController;
