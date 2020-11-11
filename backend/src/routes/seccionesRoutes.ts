import { Router } from 'express';
import seccionesController from '../controllers/seccionesController';

class SeccionesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', seccionesController.list);
        this.router.get('/:id', seccionesController.getOne);
        this.router.get('/Curso/:id', seccionesController.getCurso);
        this.router.get('/Catedratico/:id', seccionesController.getCatedratico);
        this.router.post('/', seccionesController.create);
        this.router.put('/:id', seccionesController.update);
        this.router.delete('/:id', seccionesController.delete);
    }
}

const seccionesRoutes = new SeccionesRoutes();
export default seccionesRoutes.router;