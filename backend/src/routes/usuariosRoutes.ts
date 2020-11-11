import { Router } from 'express';
import usuariosController from '../controllers/usuariosController';

class UsuariosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        //No hay que mandar nada, retorna JSON
        this.router.get('/', usuariosController.list);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/carnet
         */
        this.router.get('/:id', usuariosController.getOne);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Carnet": int(9),
	            "Nombres": string(64),
	            "Apellidos": string(64),
	            "Password": string(64),
	            "Correo": string(64),
            }
         */
        this.router.post('/', usuariosController.create);

        /*No hay que mandar nada, retorna JSON. 
         * /:id/:pw indica que la direccion tiene que ser del tipo 
         * localhost:8000/api/Usuarios/carnet/password
         */
        this.router.post('/:id/:pw', usuariosController.login);

        /* Hay que mandar JSON, retorna JSON. 
         *  {
	            "Carnet": int(9),
	            "Nombres": string(64),
	            "Apellidos": string(64),
	            "Password": string(64),
	            "Correo": string(64),
            }

            /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/carnet
         */
        this.router.put('/:id', usuariosController.update);

        /*No hay que mandar nada, retorna JSON. 
         * /:id indica que la direccion tiene que ser del tipo localhost:8000/api/Usuarios/identificador
         */
        this.router.delete('/:id', usuariosController.delete);
    }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;