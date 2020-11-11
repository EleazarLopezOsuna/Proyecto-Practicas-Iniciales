import { Request, Response } from 'express';
import pool from '../database'

class CursosAprobadosController{
    public async list (req: Request, res: Response): Promise<void>{
        const CursosAprobados = await pool.query('SELECT * FROM CursosAprobados')
        res.json(CursosAprobados);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { ca } = req.params;

        const usuario = await pool.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', 
        [id, ca]);

        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "El curso " + id + " no existe para el usuario " + ca})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const Cod = JSON.stringify(req.body.CodigoCurso);
        const Carnet = JSON.stringify(req.body.Carnet);

        var usuarios = (await pool.query(
            'SELECT * FROM CursosAprobados WHERE CodigoCurso = ' + Cod + ' AND Carnet = ' + Carnet
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO CursosAprobados set ?', [req.body])
            res.json({Text: 'Curso ' + Cod + ' agregado para el usuario ' + Carnet});
        }else{
            res.status(404).json({Text: "El curso ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { ca } = req.params;

        const usuario = await pool.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', 
        [id, ca]);

        if(usuario.length > 0){
            await pool.query('UPDATE CursosAprobados set ? WHERE CodigoCurso = ? AND Carnet = ?', 
            [req.body, id])
            
            res.json({Text: "El curso fue actualizado"})
        }else{
            res.status(404).json({Text: "El curso no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;
        const { ca } = req.params;

        const usuario = await pool.query('SELECT * FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?', 
        [id, ca]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM CursosAprobados WHERE CodigoCurso = ? AND Carnet = ?',
            [id, ca])

            res.json({Text: 'Curso ' + id + ' Eliminado'});
        }else{
            res.status(404).json({Text: "El curso no existe"})
        }
    }
}

const cursosAprobadosController = new CursosAprobadosController();

export default cursosAprobadosController;