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
class CatedraticosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carreras = yield database_1.default.query('SELECT * FROM Catedraticos');
            res.json(carreras);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const { apellido } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', [nombre, apellido]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "El catedratico no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre = JSON.stringify(req.body.Nombres);
            const apellido = JSON.stringify(req.body.Apellidos);
            var usuarios = yield database_1.default.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', [nombre, apellido]);
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Catedraticos set ?', [req.body]);
                res.json({ Text: 'Catedratico creado' });
            }
            else {
                res.status(404).json({ Text: "El catedratico ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const { apellido } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', [nombre, apellido]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Catedraticos set ? WHERE Nombres = ? AND Apellidos = ?', [req.body, nombre, apellido]);
                res.json({ Text: "La catedratico fue actualizado" });
            }
            else {
                res.status(404).json({ Text: "El catedratico ya existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const { apellido } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', [nombre, apellido]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', [nombre, apellido]);
                res.json({ Text: 'Catedratico eliminado' });
            }
            else {
                res.status(404).json({ Text: "El catedratico ya existe" });
            }
        });
    }
}
const catedraticosController = new CatedraticosController();
exports.default = catedraticosController;
