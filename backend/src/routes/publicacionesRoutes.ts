import { Router } from 'express';
import publicacionesController from '../controllers/publicacionesController';

class PublicacionesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', publicacionesController.list);
        this.router.get('/Curso/:id', publicacionesController.getCurso);
        this.router.get('/Catedratico/:id', publicacionesController.getCatedratico);
        this.router.get('/Seccion/:id', publicacionesController.getSeccion);
        this.router.get('/Usuario/:id', publicacionesController.getUsuario);
        this.router.post('/', publicacionesController.create);
        this.router.put('/:id', publicacionesController.update);
        this.router.delete('/:id', publicacionesController.delete);
    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;