import { Router } from 'express';
import catedraticosController from '../controllers/catedraticosController';

class CatedraticosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', catedraticosController.list);

        /*  No hay que mandar nada, retorna JSON. 
         *  /:nombre/:apellido indica que la direccion tiene que ser del tipo 
         *  localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.get('/:nombre/:apellido', catedraticosController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Nombres": string(64),
	            "Apellidos": string(64)
            }
         */
        this.router.post('/', catedraticosController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Nombres": string(64),
	            "Apellidos": string(64)
            }

            /:nombre/:apellido indica que la direccion tiene que ser del tipo
            localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.put('/:nombre/:apellido', catedraticosController.update);

        /*  No hay que mandar nada, retorna JSON. 
         *  /:nombre/:apellido indica que la direccion tiene que ser del tipo 
            localhost:8000/api/Catedraticos/nombres/apellidos
         */
        this.router.delete('/:nombre/:apellido', catedraticosController.delete);
    }
}

const catedraticosRoutes = new CatedraticosRoutes();
export default catedraticosRoutes.router;