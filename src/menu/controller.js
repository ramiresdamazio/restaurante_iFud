import { restaurantesList } from '../database.js'

export class MenuController {
  constructor(){}

  async buscarPrato(request, response) {
    // receber o id do prato
    // acessar lista de pratos e retornar a informação apenas do prato pedido
    return response.json(restaurantesList)
    }
  }
