import { Router } from 'express';
import catedraticosController from '../controllers/catedraticosController';

class CatedraticosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', catedraticosController.list);
        this.router.get('/:nombre/:apellido', catedraticosController.getOne);
        this.router.post('/', catedraticosController.create);
        this.router.put('/:nombre/:apellido', catedraticosController.update);
        this.router.delete('/:nombre/:apellido', catedraticosController.delete);
    }
}

const catedraticosRoutes = new CatedraticosRoutes();
export default catedraticosRoutes.router;