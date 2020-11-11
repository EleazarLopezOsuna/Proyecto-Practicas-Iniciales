import { Router } from 'express';
import cursosAprobadosController from '../controllers/cursosAprobadosController';

class CursosAprobadosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', cursosAprobadosController.list);
        this.router.get('/:id/:ca', cursosAprobadosController.getOne);
        this.router.post('/', cursosAprobadosController.create);
        this.router.put('/:id/:ca', cursosAprobadosController.update);
        this.router.delete('/:id/:ca', cursosAprobadosController.delete);
    }
}

const cursosAprobadosRoutes = new CursosAprobadosRoutes();
export default cursosAprobadosRoutes.router;