import { Router } from 'express';
import seccionesController from '../controllers/seccionesController';

class SeccionesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', seccionesController.list);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.get('/:id', seccionesController.getOne);
        
         /*No hay que mandar nada, retorna JSON. 
         * Curso/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Secciones/Curso/identificador
         */
        this.router.get('/Curso/:id', seccionesController.getCurso);

        /*No hay que mandar nada, retorna JSON. 
         * Catedratico/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Secciones/Catedratico/identificador
         */
        this.router.get('/Catedratico/:id', seccionesController.getCatedratico);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
                "IdSeccion": string(20),        Se forma CodigoCurso + Seccion
	            "CodigoCurso": int,
	            "CodigoCatedratico": int,
	            "Seccion": string(2)
            }
         */
        this.router.post('/', seccionesController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
                "IdSeccion": string(20),        Se forma CodigoCurso + Seccion
	            "CodigoCurso": int,
	            "CodigoCatedratico": int,
	            "Seccion": string(2)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.put('/:id', seccionesController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Secciones/identificador
         */
        this.router.delete('/:id', seccionesController.delete);
    }
}

const seccionesRoutes = new SeccionesRoutes();
export default seccionesRoutes.router;