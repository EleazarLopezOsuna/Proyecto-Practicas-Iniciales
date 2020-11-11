import { Request, Response } from 'express';
import pool from '../database'

class SeccionesController{
    public async list (req: Request, res: Response): Promise<void>{
        const Secciones = await pool.query('SELECT * FROM Secciones')
        res.json(Secciones);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);

        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "La seccion no existe"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const IdSeccion = JSON.stringify(req.body.IdSeccion);

        var usuarios = (await pool.query(
            'SELECT * FROM Secciones WHERE IdSeccion = ' + IdSeccion
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Secciones set ?', [req.body])
            res.json({Text: 'seccion ' + IdSeccion + ' Creada'});
        }else{
            res.status(404).json({Text: "La seccion ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Secciones set ? WHERE IdSeccion = ?', [req.body, id])
            res.json({Text: "La seccion fue actualizada"})
        }else{
            res.status(404).json({Text: "La seccion no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Secciones WHERE IdSeccion = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Secciones WHERE IdSeccion = ?', [id])
            res.json({Text: 'seccion ' + id + ' Eliminada'});
        }else{
            res.status(404).json({Text: "La seccion no existe"})
        }
    }

    public async getCurso (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Secciones WHERE CodigoCurso = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen secciones"})
        }
    }

    public async getCatedratico (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Secciones WHERE IdSCatedratico = ?', [id]);
        
        if(usuario.length > 0){
            res.json(usuario)
        }else{
            res.status(404).json({Text: "No existen secciones"})
        }
    }
}

const seccionesController = new SeccionesController();

export default seccionesController;