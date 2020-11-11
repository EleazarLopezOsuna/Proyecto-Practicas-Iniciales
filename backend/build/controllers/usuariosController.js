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
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('SELECT * FROM Usuarios;');
            res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                res.json(usuario[0]);
            }
            else {
                res.status(404).json({ Text: "El usuario no existe" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const carnetNuevo = JSON.stringify(req.body.Carnet);
            var usuarios = (yield database_1.default.query('SELECT * FROM Usuarios WHERE Carnet = ' + carnetNuevo));
            if (usuarios.length == 0) {
                yield database_1.default.query('INSERT INTO Usuarios set ?', [req.body]);
                res.json({ Text: 'Usuario ' + carnetNuevo + ' Creado' });
            }
            else {
                res.status(404).json({ Text: "El usuario ya existe" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('UPDATE Usuarios set ? WHERE Carnet = ?', [req.body, id]);
                res.json({ Text: "El usuario fue actualizado" });
            }
            else {
                res.status(404).json({ Text: "El usuario no existe" });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                yield database_1.default.query('DELETE FROM Usuarios WHERE Carnet = ?', [id]);
                res.json({ Text: 'Usuario ' + id + ' Eliminado' });
            }
            else {
                res.status(404).json({ Text: "El usuario no existe" });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { pw } = req.params;
            const { id } = req.params;
            const usuario = yield database_1.default.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
            if (usuario.length > 0) {
                if (usuario[0].Password == pw) {
                    res.json({ Text: 'Datos Correctos' });
                }
                else {
                    res.status(404).json({ Text: "Datos erroneos" });
                }
            }
            else {
                res.status(404).json({ Text: "El usuario no existe" });
            }
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
