import { Router } from 'express'
import { RestauranteController } from './controller.js'

const restauranteRouter = new Router()
const restauranteController = new RestauranteController()

restauranteRouter.get('/restaurante', restauranteController.listar)
restauranteRouter.get('/restaurante/:id', restauranteController.buscarRestaurante)
restauranteRouter.get('/prato/:id', restauranteController.buscarDetalhesPrato)
restauranteRouter.get('/motoboys', restauranteController.buscarMotoboys)

export default restauranteRouter