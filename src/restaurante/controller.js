import { restaurantesList, menuItems, bebidasRestaurante, motoboysList } from "../database.js";


export class RestauranteController {
  constructor(){}
  
  async listar(request, response) {
    return response.json(restaurantesList)
  }
  
  async buscarMotoboys (request, response) {
     return response.json(motoboysList)
    }  

  async buscarDetalhesPrato(request, response) {
    const { id } = request.params
    const prato = menuItems.find(item => item.id === Number(id))

    if(!prato) {
      return response.status(404).json({ mensagem: 'Prato não encontrado!'})
    }
    return response.json(prato)
  }

  async buscarRestaurante (request, response) {
    const { id } = request.params

    const restaurante = restaurantesList.find(restaurante => restaurante.id === Number(id))
    
    if(!restaurante) {
      return response.status(400).json({ error: 'Restaurante não existe' })
    }

    const pratos = menuItems.filter(prato => prato.restauranteId === restaurante.id)

    const pratosModificados = pratos.map(prato => {
      delete prato.description
      return prato
    })
    
    const bebidas = bebidasRestaurante.filter(bebida => bebida.restauranteId === restaurante.id)

    return response.json({ ...restaurante, pratos: pratosModificados, bebidas })
  }


  }