import { Request, Response } from 'express';
import pool from '../database'

class CatedraticosController{
    public async list (req: Request, res: Response): Promise<void>{
        const carreras = await pool.query('SELECT * FROM Catedraticos')
        res.json(carreras);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { nombre } = req.params;
        const { apellido } = req.params;

        const usuario = await pool.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', 
        [nombre, apellido]);

        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "El catedratico no existe"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const nombre = JSON.stringify(req.body.Nombres);
        const apellido = JSON.stringify(req.body.Apellidos);

        var usuarios = await pool.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', 
        [nombre, apellido]);

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Catedraticos set ?', [req.body])
            res.json({Text: 'Catedratico creado'});
        }else{
            res.status(404).json({Text: "El catedratico ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { nombre } = req.params;
        const { apellido } = req.params;

        const usuario = await pool.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', 
        [nombre, apellido]);

        if(usuario.length > 0){
            await pool.query('UPDATE Catedraticos set ? WHERE Nombres = ? AND Apellidos = ?', 
            [req.body, nombre, apellido]);

            res.json({Text: "La catedratico fue actualizado"})
        }else{
            res.status(404).json({Text: "El catedratico ya existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { nombre } = req.params;
        const { apellido } = req.params;

        const usuario = await pool.query('SELECT * FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', 
        [nombre, apellido]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Catedraticos WHERE Nombres = ? AND Apellidos = ?', 
            [nombre, apellido]);

            res.json({Text: 'Catedratico eliminado'});
        }else{
            res.status(404).json({Text: "El catedratico ya existe"})
        }
    }
}

const catedraticosController = new CatedraticosController();

export default catedraticosController;