import { Request, Response } from 'express';
import pool from '../database'

class CarrerasController{
    public async list (req: Request, res: Response): Promise<void>{
        const carreras = await pool.query('SELECT * FROM Carreras')
        res.json(carreras);
    }

    public async getOne (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);
        if(usuario.length > 0){
            res.json(usuario[0])
        }else{
            res.status(404).json({Text: "La carrera no existe"})
        }
    }

    public async create (req: Request, res: Response): Promise<any>{
        const IdCarrera = JSON.stringify(req.body.IdCarrera);

        var usuarios = (await pool.query(
            'SELECT * FROM Carreras WHERE IdCarrera = ' + IdCarrera
            ));

        if(usuarios.length == 0){
            await pool.query('INSERT INTO Carreras set ?', [req.body])
            res.json({Text: 'Carrera ' + IdCarrera + ' Creada'});
        }else{
            res.status(404).json({Text: "La carrera ya existe"})
        }
    }

    public async update (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);
        if(usuario.length > 0){
            await pool.query('UPDATE Carreras set ? WHERE IdCarrera = ?', [req.body, id])
            res.json({Text: "La carrera fue actualizada"})
        }else{
            res.status(404).json({Text: "La carrera no existe"})
        }
    }

    public async delete (req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const usuario = await pool.query('SELECT * FROM Carreras WHERE IdCarrera = ?', [id]);

        if(usuario.length > 0){
            await pool.query('DELETE FROM Carreras WHERE IdCarrera = ?', [id])
            res.json({Text: 'Carrera ' + id + ' Eliminada'});
        }else{
            res.status(404).json({Text: "La carrera no existe"})
        }
    }
}

const carrerasController = new CarrerasController();

export default carrerasController;