import { Request, Response } from 'express';
import pool from '../database'

class PensumsController{
    public async list (req: Request, res: Response): Promise<void>{
        const Pensums = await pool.query('SELECT * FROM Pensums')
        res.json(Pensums);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { cod } = req.params;

        const usuario = await pool.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', 
            [id, cod]);
        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "El curso no existe en este pensum"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const IdCarrera = JSON.stringify(req.body.IdCarrera);
        const CodCurso = JSON.stringify(req.body.CodigoCarrera);

        var usuarios = (await pool.query(
            'SELECT * FROM Pensums WHERE IdCarrera = ' + IdCarrera + ' AND CodigoCurso = ' + CodCurso
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Pensums set ?', [req.body])
            res.json({Text: 'Curso ' + CodCurso + ' Creado en Pensum ' + IdCarrera});
        }else{
            res.status(404).json({Text: "El curso no existe en este pensum"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { cod } = req.params;

        const usuario = await pool.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', 
        [id, cod]);

        if(usuario.length > 0){
            await pool.query('UPDATE Pensums set ? WHERE IdCarrera = ? AND CodigoCarrera = ?', 
            [req.body, id, cod])

            res.json({Text: "La carrera fue actualizada"})
        }else{
            res.status(404).json({Text: "El curso no existe en este pensum"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { cod } = req.params;

        const usuario = await pool.query('SELECT * FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', 
        [id, cod]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Pensums WHERE IdCarrera = ? AND CodigoCarrera = ?', [id, cod])
            res.json({Text: 'Curso ' + cod + ' Eliminada del pensum ' + id});
        }else{
            res.status(404).json({Text: "El curso no existe en este pensum"})
        }
    }
}

const pensumsController = new PensumsController();

export default pensumsController;