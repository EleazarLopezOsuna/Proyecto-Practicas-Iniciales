import { Request, Response } from 'express';
import pool from '../database'

class CursosController{
    public async list (req: Request, res: Response): Promise<void>{
        const carreras = await pool.query('SELECT * FROM Cursos')
        res.json(carreras);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);
        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "El curso no existe"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const IdCarrera = JSON.stringify(req.body.CodigoCurso);

        var usuarios = (await pool.query(
            'SELECT * FROM Cursos WHERE CodigoCurso = ' + IdCarrera
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Cursos set ?', [req.body])
            res.json({Text: 'Curso ' + IdCarrera + ' Creado'});
        }else{
            res.status(404).json({Text: "El curso ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Cursos set ? WHERE CodigoCurso = ?', [req.body, id])
            res.json({Text: "El curso fue actualizado"})
        }else{
            res.status(404).json({Text: "El curso no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Cursos WHERE CodigoCurso = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Cursos WHERE CodigoCurso = ?', [id])
            res.json({Text: 'Curso ' + id + ' Eliminado'});
        }else{
            res.status(404).json({Text: "El curso no existe"})
        }
    }
}

const cursosController = new CursosController();

export default cursosController;