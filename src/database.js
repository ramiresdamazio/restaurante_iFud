export const menuItems = [
      { id: 1, name: 'Pizza de Calabresa', valorEmReais:['Média 40 reais', 'Grande 55 reais'], description: 'Massa artesanal fermentada por 48h, molho de tomate rústico e calabresa defumada.', ingredientes: ['Trigo', 'molho de tomate', 'mussarela', 'calabresa', 'orégano'], tamanhos:['Média: 8 fatias', 'Grande: 12 fatias'], restauranteId: 1 },

      { id: 2, name: 'Macarrão', valorEmReais:['Individual 25 reais', 'Para dois 45 reais', 'Adicionais 10 reais'], description: 'Macarrão tipo Penne servido com molho caseiro e queijo parmesão ralado na hora.', ingredientes: ['Massa Penne', 'molho (a escolher)', 'queijo parmesão'], peso:['Individual: 400g', 'Para dois 800g'], adicionais:['Almondegas', 'Mostarda'] , restauranteId: 1 },

      { id: 3, name: 'Nacho', valorEmReais:['Simples 20 reais', 'Completo 32 reais', 'Supreme 38 reais'], description: 'Tortilhas de milho crocantes, perfeitas para compartilhar', ingredientes:['Tortilhas de milho', 'sal', 'Cheddar', 'Chili', 'Sour Cream', 'Guacamole'], montagem:['simples: apenas cheddar', 'completo: cheddar, chili com sour cream', 'supreme: tudo acima + guacamole'], restauranteId: 2 },

      { id: 4, name: 'Tacos', valorEmReais:['1 unidade 10 reais', '3 unidades 27 reais', '3 tacos + refri 32 reais'], description: 'Tortilha de milho macia ou crocante com recheio fresquinho.', ingredientes:['Tortilha', 'alface', 'tomate', 'queijo'], montagem:['cliente pode escolher entre frango ou carne'], restauranteId: 2 },

      { id: 5, name: 'Sushi',  valorEmReais:['Entrada 18 reais', 'individual 30 reais', 'Fome de leão 55 reais'], description: 'Uramakis de salmão fresco com cream cheese.', ingredientes:['Arroz', 'alga', 'salmão', 'cream cheese', 'cebolinha'], montagem:['Entrada 4 peças', 'Individual 8 peças', 'Fome de leão 16 peças'], restauranteId: 3 },

      { id: 6, name: 'Onigiri',  valorEmReais:['Tradicional 15 reais', 'vegano 15 reais', 'especial 16 reais'], description: 'Bolinho de arroz japonês envolto em alga nori crocante.', ingredientes:['Arroz japonês', 'alga nori', 'recheio'], montagem:['Tradicional: recheio de salmão grelhado', 'vegano: recheio de umeboshi(ameixa) ou shimeji', 'especial: atum com maionese'], restauranteId: 3 },

      { id: 7, name: 'Frango Xadrez',  valorEmReais:['Executivo 32 reais', 'classico 58 reais', 'familia 95 reais'], description: 'Cubos de frango suculentos salteados com pimentões coloridos e amendoim crocante ao molho de soja', ingredientes:['Frango', 'pimentão vermelho', 'pimentão verde', 'cebola', 'amendoim', 'molho shoyu', 'óleo de gergelim'], montagem:['executivo: 300g', 'classico: 600g', 'familia: 1,2kg'], quantidadeDePessoas:['executivo: 1 pessoa', 'classico: 2 pessoas', 'familia 4 pessoas'], restauranteId: 4 },

      { id: 8, name: 'Yakisoba Tradicional', valorEmReais:['Padrão 35 reais', 'Especial 48 reais', 'Vegetariano 30 reais'], description: 'Tradicional macarrão chinês frito na chapa com legumes selecionados, carne bovina e frango ao molho especial.', ingredientes:['Macarrão próprio para yakisoba', 'acelga', 'brócolis', 'cenoura', 'carne', 'frango', 'molho à base de ostras e shoyu'], montagem:['padrao: carne e frango', 'especial: carne, frango e camarão', 'vegetariano: apenas legumes e cogumelos'], restauranteId: 4 },
]

export const restaurantesList = [
      { id: 1, name: 'Comida Kingão'},
      { id: 2, name: 'Comida Mexicana'},
      { id: 3, name: 'Nihon Food'},
      { id: 4, name: 'XingLing Food'},
]

export const bebidasRestaurante = [
      { id: 1, name: 'Água Italiana', valor: 3, restauranteId: 1 },
      { id: 2, name: 'Refri Italiano', valor: 5, restauranteId: 1 },
      { id: 3, name: 'Água Mexicana', valor: 4, restauranteId: 2 },
      { id: 4, name: 'Refri Mexicano', valor: 6, restauranteId: 2 },
      { id: 5, name: 'Água Japonesa', valor: 5, restauranteId: 3 },
      { id: 6, name: 'Refri Japones', valor: 7, restauranteId: 3 },
      { id: 7, name: 'Água Chinesa', valor: 6, restauranteId: 4 },
      { id: 8, name: 'Refri Chines', valor: 8, restauranteId: 4 }
]
export const motoboysList = [
      { id: 1, name: 'Dorime'},
      { id: 2, name: 'Interino'},
      { id: 3, name: 'Adapari'},
      { id: 4, name: 'Latire'},
      { id: 5, name: 'Ameno'},
]
//fazer uma rota com menu igual foi feito com restaurante