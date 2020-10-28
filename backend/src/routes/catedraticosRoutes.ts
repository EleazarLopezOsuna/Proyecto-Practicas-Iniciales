import { Router } from 'express';
import catedraticosController from '../controllers/catedraticosController';

class CatedraticosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', catedraticosController.list);
        this.router.get('/:id', catedraticosController.getOne);
        this.router.post('/', catedraticosController.create);
        this.router.put('/:id', catedraticosController.update);
        this.router.delete('/:id', catedraticosController.delete);
    }
}

const catedraticosRoutes = new CatedraticosRoutes();
export default catedraticosRoutes.router;