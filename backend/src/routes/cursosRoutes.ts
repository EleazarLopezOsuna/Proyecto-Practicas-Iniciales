import { Router } from 'express';
import cursosController from '../controllers/cursosController';

class CursosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', cursosController.list);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.get('/:id', cursosController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "CodigoCurso": int,
	            "Nombres": string(64)
            }
         */
        this.router.post('/', cursosController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "CodigoCurso": int,
	            "Nombres": string(64)
            }
            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.put('/:id', cursosController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Cursos/identificador
         */
        this.router.delete('/:id', cursosController.delete);
    }
}

const cursosRoutes = new CursosRoutes();
export default cursosRoutes.router;