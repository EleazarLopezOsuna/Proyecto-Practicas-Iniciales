import { Request, Response } from 'express';
import pool from '../database'

class CarrerasController{
    public list (req: Request, res: Response){
        res.json({text: 'Lista'});
    }

    public getOne (req: Request, res: Response){
        res.json({text: 'Objeto unico'});
    }

    public create (req: Request, res: Response){
        res.json({text: 'Crear'});
    }

    public update (req: Request, res: Response){
        res.json({text: 'Actualizar'});
    }

    public delete (req: Request, res: Response){
        res.json({text: 'Eliminar'});
    }
}

const carrerasController = new CarrerasController();

export default carrerasController;