import { Request, Response } from 'express';
import pool from '../database'

class PublicacionesController{
    public async list (req: Request, res: Response): Promise<void>{
        const Publicaciones = await pool.query('SELECT * FROM Publicaciones')
        res.json(Publicaciones);
    }

    public async create (req: Request, res: Response): Promise<any>{
        await pool.query('INSERT INTO Publicaciones set ?', [req.body])
        res.json({Text: 'publicacion Creada'});
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE IdPublicacion = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Publicaciones set ? WHERE IdPublicacion = ?', [req.body, id])
            
            res.json({Text: "La publicacion fue actualizada"})
        }else{
            res.status(404).json({Text: "La publicacion no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE IdPublicacion = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Publicaciones WHERE IdPublicacion = ?', [id])
            res.json({Text: 'publicacion ' + id + ' Eliminada'});
        }else{
            res.status(404).json({Text: "La publicacion no existe"})
        }
    }

    public async getCurso (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE CodigoCurso = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen publicaciones"})
        }
    }

    public async getCatedratico (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE IdCatedratico = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen publicaciones"})
        }
    }

    public async getSeccion (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE IdSeccion = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen publicaciones"})
        }
    }

    public async getUsuario (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Publicaciones WHERE Carnet = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen publicaciones"})
        }
    }
}

const publicacionesController = new PublicacionesController();

export default publicacionesController;