import { Request, Response } from 'express';
import pool from '../database'

class ComentariosController{
    public async list (req: Request, res: Response): Promise<void>{
        const Comentarios = await pool.query('SELECT * FROM Comentarios')
        res.json(Comentarios);
    }

    public async create (req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO Comentarios set ?', [req.body])
        res.json({Text: 'Comentario creado'});
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Comentarios WHERE IdComentario = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Comentarios set ? WHERE IdComentario = ?', [req.body, id])
            res.json({Text: "El comentario fue actualizada"})
        }else{
            res.status(404).json({Text: "El comentario no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Comentarios WHERE IdComentario = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Comentarios WHERE IdComentario = ?', [id])
            res.json({Text: 'Carrera ' + id + ' Eliminada'});
        }else{
            res.status(404).json({Text: "El comentario no existe"})
        }
    }

    public async getUsuario (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Comentarios WHERE Carnet = ?', [id]);
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "El comentario no existe"})
        }
    }

    public async getPublicacion (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Comentarios WHERE IdPublicacion = ?', [id]);
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "El comentario no existe"})
        }
    }
}

const comentariosController = new ComentariosController();

export default comentariosController;