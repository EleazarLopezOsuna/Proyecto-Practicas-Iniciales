import { Router } from 'express';
import pensumsController from '../controllers/pensumsController';

class PensumsRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', pensumsController.list);
        this.router.get('/:id', pensumsController.getOne);
        this.router.post('/', pensumsController.create);
        this.router.put('/:id', pensumsController.update);
        this.router.delete('/:id', pensumsController.delete);
    }
}

const pensumsRoutes = new PensumsRoutes();
export default pensumsRoutes.router;