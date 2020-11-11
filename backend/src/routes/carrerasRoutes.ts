import { Router } from 'express';
import carrerasController from '../controllers/carrerasController';

class CarrerasRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', carrerasController.list);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.get('/:id', carrerasController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdCarrera": int(2),
	            "Nombre": string(64)
            }
         */
        this.router.post('/', carrerasController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdCarrera": int(2),
	            "Nombre": string(64)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.put('/:id', carrerasController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Carreras/identificador
         */
        this.router.delete('/:id', carrerasController.delete);
    }
}

const carrerasRoutes = new CarrerasRoutes();
export default carrerasRoutes.router;