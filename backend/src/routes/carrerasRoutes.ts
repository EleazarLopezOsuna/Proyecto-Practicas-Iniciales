import { Router } from 'express';
import carrerasController from '../controllers/carrerasController';

class CarrerasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', carrerasController.list);
        this.router.get('/:id', carrerasController.getOne);
        this.router.post('/', carrerasController.create);
        this.router.put('/:id', carrerasController.update);
        this.router.delete('/:id', carrerasController.delete);
    }
}

const carrerasRoutes = new CarrerasRoutes();
export default carrerasRoutes.router;