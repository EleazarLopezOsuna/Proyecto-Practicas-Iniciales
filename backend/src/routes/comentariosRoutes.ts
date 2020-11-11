import { Router } from 'express';
import comentariosController from '../controllers/comentariosController';

class ComentariosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', comentariosController.list);

        /* No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Comentarios/identificador
         */
        this.router.get('/Usuario/:id', comentariosController.getUsuario);

        /* No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Comentarios/identificador
         */
        this.router.get('/Publicacion/:id', comentariosController.getPublicacion);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdPublicacion": int,
	            "Carnet": int(9),
	            "Mensaje": string(256)
            }
         */
        this.router.post('/', comentariosController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "IdPublicacion": int,
	            "Carnet": int(9),
	            "Mensaje": string(256)
            }

            /:nombre/:apellido indica que la direccion tiene que ser del tipo
            localhost:8000/api/Comentarios/identificador
         */
        this.router.put('/:id', comentariosController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Comentarios/identificador
         */
        this.router.delete('/:id', comentariosController.delete);
    }
}

const comentariosRoutes = new ComentariosRoutes();
export default comentariosRoutes.router;