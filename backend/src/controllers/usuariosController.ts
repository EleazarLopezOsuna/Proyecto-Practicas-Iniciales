import { Request, Response } from 'express';
import pool from '../database'

class UsuariosController{

    public async list (req: Request, res: Response): Promise<void>{
        const usuarios = await pool.query('SELECT * FROM Usuarios;')
        res.json(usuarios);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "El usuario no existe"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const carnetNuevo = JSON.stringify(req.body.Carnet);

        var usuarios = (await pool.query(
            'SELECT * FROM Usuarios WHERE Carnet = ' + carnetNuevo
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Usuarios set ?', [req.body])
            res.json({Text: 'Usuario ' + carnetNuevo + ' Creado'});
        }else{
            res.status(404).json({Text: "El usuario ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Usuarios set ? WHERE Carnet = ?', [req.body, id])
            res.json({Text: "El usuario fue actualizado"})
        }else{
            res.status(404).json({Text: "El usuario no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Usuarios WHERE Carnet = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Usuarios WHERE Carnet = ?', [id])
            res.json({Text: 'Usuario ' + id + ' Eliminado'});
        }else{
            res.status(404).json({Text: "El usuario no existe"})
        }
    }

}

const usuariosController = new UsuariosController();

export default usuariosController;