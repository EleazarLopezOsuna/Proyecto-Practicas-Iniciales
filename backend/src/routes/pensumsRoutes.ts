import { Router } from 'express';
import pensumsController from '../controllers/pensumsController';

class PensumsRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', pensumsController.list);

        /*No hay que mandar nada, retorna JSON. 
         * /:id/:cod indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.get('/:id/:cod', pensumsController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdCarrera": int(2),
	            "CodigoCurso": int,
	            "Creditos": int,
	            "Semestre": int
            }
         */
        this.router.post('/', pensumsController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdCarrera": int(2),
	            "CodigoCurso": int,
	            "Creditos": int,
	            "Semestre": int
            }

            localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.put('/:id/:cod', pensumsController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id/:cod indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Pensums/CodigoCarrera/CodigoCurso
         */
        this.router.delete('/:id/:cod', pensumsController.delete);
    }
}

const pensumsRoutes = new PensumsRoutes();
export default pensumsRoutes.router;