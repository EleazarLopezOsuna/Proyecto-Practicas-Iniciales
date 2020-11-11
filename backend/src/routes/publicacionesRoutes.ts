import { Router } from 'express';
import publicacionesController from '../controllers/publicacionesController';

class PublicacionesRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', publicacionesController.list);

        /*No hay que mandar nada, retorna JSON. 
         * Curso/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Publicaciones/Curso/identificador
         */
        this.router.get('/Curso/:id', publicacionesController.getCurso);

        /*No hay que mandar nada, retorna JSON. 
         * Curso/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Publicaciones/Catedratico/identificador
         */
        this.router.get('/Catedratico/:id', publicacionesController.getCatedratico);

        /*No hay que mandar nada, retorna JSON. 
         * Curso/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Publicaciones/Seccion/identificador
         */
        this.router.get('/Seccion/:id', publicacionesController.getSeccion);

        /*No hay que mandar nada, retorna JSON. 
         * Curso/:id indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Publicaciones/Usuario/identificador
         */
        this.router.get('/Usuario/:id', publicacionesController.getUsuario);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Carnet": int(9),
	            "CodigoCurso": int                                  PUEDE SER NULO
	            "CodigoCatedratico": int,                           PUEDE SER NULO
	            "IdSeccion": string(20), //CodigoCurso_Seccion      PUEDE SER NULO
	            "Mensaje": string(256),
	            "Fecha": date,
	            "Tipo": int (1 positivo, 0 negativo)
            }
         */
        this.router.post('/', publicacionesController.create);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Carnet": int(9),
	            "CodigoCurso": int                                  PUEDE SER NULO
	            "CodigoCatedratico": int,                           PUEDE SER NULO
	            "IdSeccion": string(20), //CodigoCurso_Seccion      PUEDE SER NULO
	            "Mensaje": string(256),
	            "Fecha": date,
	            "Tipo": int (1 positivo, 0 negativo)
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Publicaciones/identificador
         */
        this.router.put('/:id', publicacionesController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Publicaciones/identificador
         */
        this.router.delete('/:id', publicacionesController.delete);
    }
}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;