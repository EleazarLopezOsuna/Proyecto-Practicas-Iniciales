import { Router } from 'express';
import cursosAprobadosController from '../controllers/cursosAprobadosController';

class CursosAprobadosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', cursosAprobadosController.list);

        /*  No hay que mandar nada, retorna JSON. 
         *  /:id/:ca indica que la direccion tiene que ser del tipo 
         *  localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.get('/:id/:ca', cursosAprobadosController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "CodigoCurso": int,
	            "Carnet": int(9),
	            "Nota": int
            }
         */
        this.router.post('/', cursosAprobadosController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "CodigoCurso": int,
	            "Carnet": int(9),
	            "Nota": int
            }

            /:id/:ca indica que la direccion tiene que ser del tipo 
            localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.put('/:id/:ca', cursosAprobadosController.update);

        /* No hay que mandar nada, retorna JSON. 
            /:id/:ca indica que la direccion tiene que ser del tipo 
            localhost:8000/api/CursosAprobados/CodigoCurso/Carnet
         */
        this.router.delete('/:id/:ca', cursosAprobadosController.delete);
    }
}

const cursosAprobadosRoutes = new CursosAprobadosRoutes();
export default cursosAprobadosRoutes.router;