import { Router } from 'express';
import pensumsController from '../controllers/pensumsController';

class PensumsRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', pensumsController.list);
        this.router.get('/:id/:cod', pensumsController.getOne);
        this.router.post('/', pensumsController.create);
        this.router.put('/:id/:cod', pensumsController.update);
        this.router.delete('/:id/:cod', pensumsController.delete);
    }
}

const pensumsRoutes = new PensumsRoutes();
export default pensumsRoutes.router;