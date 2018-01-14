import {  LOAD_CARTE_SUCCESS }from '../actions/actions_type'

const initialState = {
  pizzas: [
    {
      value: 'APRESUNTADA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO E MUSSARELA',
      votes: 0,
    },
    {
      value: 'CROCANTE',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA (2 CAMADAS), CATUPIRY, BATATA PALHA (DEPOIS DE ASSADA)',
      votes: 0,
    },
    {
      value: 'MILHO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA E MILHO',
      votes: 0,
    },
    {
      value: 'MUSSARELA',
      ingredients: 'MOLHO DE TOMATE E MUSSARELA (2 CAMADAS)',
      votes: 0,
    },
    {
      value: 'TRADICIONAL',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, TOMATES E MUSSARELA',
      votes: 0,
    },
    {
      value: 'ALHO E ÓLEO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, ALHO E AZEITE DE OLIVA',
      votes: 0,
    },
    {
      value: 'BACON',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA E BACON',
      votes: 0,
    },
    {
      value: 'CALABRESA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA E CALABRESA',
      votes: 0,
    },
    {
      value: 'ESCAROLA',
      ingredients: 'MOLHO DE TOMATE, ESCAROLA (REFOGADA), BACON, ALHO (OPCIONAL) E MUSSARELA',
      votes: 0,
    },
    {
      value: 'FRANGO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO E REFOGADO',
      votes: 0,
    },
    {
      value: 'FRANGO C/ CATUPIRY',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO DE CATUPIRY',
      votes: 0,
    },
    {
      value: 'FRAN-MILHO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO E MILHO',
      votes: 0,
    },
    {
      value: 'MARGUERITA',
      ingredients: 'MOLHO DE TOMATE, TOMATES, PARMESÃO, MANJERICÃO, AZEITE DE OLIVA E MUSSARELA',
      votes: 0,
    },
    {
      value: 'MEXICANA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA RALADA, PIMENTÃO VERDE E PIMENTA-CALABRESA',
      votes: 0,
    },
    {
      value: 'NAPOLITANA',
      ingredients: 'MOLHO DE TOMATE, TOMATES, PROVOLONE E MUSSARELA',
      votes: 0,
    },
    {
      value: 'PAULISTA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, MILHO, ERVILHA, PALMITO E AZEITONAS',
      votes: 0,
    },
    {
      value: 'PORTUGUESA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, OVOS, CEBOLA E AZEITONAS',
      votes: 0,
    },
    {
      value: 'TOSCANA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA E OVOS',
      votes: 0,
    },
    {
      value: 'ALICHE',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, ALICHE E TOMATES',
      votes: 0,
    },
    {
      value: 'AMARELINHA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, OVOS E CHEDDAR',
      votes: 0,
    },
    {
      value: 'ATUM',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, ATUM, CEBOLA E AZEITONAS',
      votes: 0,
    },
    {
      value: 'CAMPESTRE',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, BACON, MILHO, TOMATES E OVOS',
      votes: 0,
    },
    {
      value: 'CAPRI',
      ingredients: 'MOLHO DE TOMATE, TOMATES, MILHO, PARMESÃO E MUSSARELA',
      votes: 0,
    },
    {
      value: 'CARIOCA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, MILHO E CATUPIRY',
      votes: 0,
    },
    {
      value: 'CATARINA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, OVOS E CATUPIRY',
      votes: 0,
    },
    {
      value: 'CHEDDAR',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA E CHEDDAR',
      votes: 0,
    },
    {
      value: 'LOMBO COM CATUPIRY',
      ingredients: 'MOLHO DE TOMATE, LOMBO, MUSSARELA E CATUPIRY',
      votes: 0,
    },
    {
      value: 'MILHO COM BACON',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, MILHO E BACON',
      votes: 0,
    },
    {
      value: 'QUATRO QUEIJOS',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, PROVOLONE, PARMESÃO E CATUPIRY',
      votes: 0,
    },
    {
      value: 'VEGETARIANA',
      ingredients: 'MOLHO DE TOMATE, ESCAROLA REFOGADA, PALMITO, MILHO, TOMATES, AZEITONAS E MUSSARELA',
      votes: 0,
    },
    {
      value: 'BACON CROCANTE',
      ingredients: 'MOLHO DE TOMATE, BACON, BATATA PALHA E MUSSARELA',
      votes: 0,
    },
    {
      value: 'BOLONHESA',
      ingredients: 'MOLHO DE TOMATE, BOLONHESA, MOLHO PARMEGIANA, PARMESÃO E MUSSARELA',
      votes: 0,
    },
    {
      value: 'BRÓCOLIS',
      ingredients: 'MOLHO DE TOMATE, BACON, BRÓCOLIS REFOGADO, CHAMPIGNON, ALHO, CATUPIRY E MUSSARELA',
      votes: 0,
    },
    {
      value: 'FRAN-CHEDDAR',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO E CHEDDAR',
      votes: 0,
    },
    {
      value: 'HAVAIANA',
      ingredients: 'MUSSARELA, LOMBO E ABACAXI',
      votes: 0,
    },
    {
      value: 'ITALIANA',
      ingredients: 'MOLHO DE TOMATE, SALAME ITALIANO, TOMATES, PARMESÃO E MUSSARELA',
      votes: 0,
    },
    {
      value: 'PALMITO',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, PALMITO E AZEITONAS',
      votes: 0,
    },
    {
      value: 'PARMEGIANA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MOLHO PARMEGIANA, PARMESÃO E MUSSARELA',
      votes: 0,
    },
    {
      value: 'PIZZAIOLO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO, PALMITO, MILHO, CALABRESA E CATUPIRY',
      votes: 0,
    },
    {
      value: 'SICILIANA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, BACON, CHAMPIGNON, PIMENTÕES VERDES E CATUPIRY',
      votes: 0,
    },
    {
      value: 'TROPICAL',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO, MILHO, ERVILHA, OVOS E CATUPIRY',
      votes: 0,
    },
    {
      value: 'UMITA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, MILHO, PALMITO E CATUPIRY',
      votes: 0,
    },
    {
      value: 'CALABRESA ESPECIAL',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA, CHAMPIGNON E GORGONZOLA',
      votes: 0,
    },
    {
      value: 'CANADENSE',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, CHAMPIGNON, PALMITO E CATUPIRY',
      votes: 0,
    },
    {
      value: 'CASTELHANA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, OVOS, CEBOLA E CATUPIRY',
      votes: 0,
    },
    {
      value: 'CHEDDAR ESPECIAL',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, CHAMPINON, PALMITO E CHEDDAR',
      votes: 0,
    },
    {
      value: 'CURITIBA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, BACON, PALMITO E AZEITONA',
      votes: 0,
    },
    {
      value: 'DO CHEFF',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, CHAMPIGNON E MOLHO BRANCO',
      votes: 0,
    },
    {
      value: 'DO SOGRO',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, ASPARGOS, CHAMPIGNON, MOLHO MADEIRA E PALMITO',
      votes: 0,
    },
    {
      value: 'ESCAROLA ESPECIAL',
      ingredients: 'MOLHO DE TOMATE, ESCAROLA REFOGADA, TOMATE SECO, CHAMPIGNON E MUSSARELA',
      votes: 0,
    },
    {
      value: 'ESPANHOLA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, FANGO DESFIADO AO MOLHO, CALABRESA RALADA, BACON, TOMATE PICADO E AZEITONAS',
      votes: 0,
    },
    {
      value: 'QUATRO QUEIJOS ESTRAVAGANZA',
      ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, PROVOLONE, PARMESÃO, CHAMPIGNON, ALHO E CATUPIRY',
      votes: 0,
    },
    {
      value: 'BOLONHESA AO CREME QUATRO QUEIJOS',
      ingredients: 'MOLHO DE TOMATE, BOLONHESA AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA',
      votes: 0,
    },
    {
      value: 'FRANGO AO CREME QUATRO QUEIJOS',
      ingredients: 'MOLHO DE TOMATE, FRANGO AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA',
      votes: 0,
    },
    {
      value: 'PEPPERONI COM CHEDDAR',
      ingredients: 'MOLHO DE TOMATE,MUSSARELA, PEPPERONI, CHAMPIGNON E CHEDDAR',
      votes: 0,
    },
    {
      value: 'STROGONOFF DE CARNE',
      ingredients: 'MOLHO DE TOMATE, STROGONOFF DE CARNE, CHAMPIGNON, BATATA PALHA E MUSSARELA',
      votes: 0,
    },
    {
      value: 'STROGONOFF DE FRANGO',
      ingredients: 'MOLHO DE TOMATE, STROGONOFF DE FRANGO, CHAMPIGNON, BATATA PALHA E MUSSARELA',
      votes: 0,
    },
    {
      value: 'TOMATE SECO COM RÚCULAS',
      ingredients: 'MOLHO DE TOMATE, TOMATE SECO, MUSSARELA, RÚCULAS E AZEITE DE OLIVA (DEPOIS DE ASSADA)',
      votes: 0,
    },
    {
      value: 'CAMARÃO NA CHAPA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, CAMARÃO NA MANTEIGA, PIMENTÕES VERMELHOS, AMRELOS E VERDES, CEBOLA E AZEITONAS',
      votes: 0,
    },
    {
      value: 'CAMARÃO AO CREME QUATRO QUEIJOS',
      ingredients: 'MOLHO DE TOMATE, CAMARÃO AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA',
      votes: 0,
    },
    {
      value: 'GAÚCHA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, COSTELA AO MOLHO DESFIADA, PROVOLONE, CEBOLA E CATUPIRY',
      votes: 0,
    },
    {
      value: 'MIGNON COM CEBOLA',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E CEBOLA REFOGADA AO SHOYO',
      votes: 0,
    },
    {
      value: 'MIGNON COM CHEDDAR',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E CHEDDAR',
      votes: 0,
    },
    {
      value: 'MIGNON COM FUNGUI',
      ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E MOLHO FUNGUI',
      votes: 0,
    }
  ]
};
  
export default (state = initialState, action) => {
  switch (action.type) {
  case LOAD_CARTE_SUCCESS:

    return Object.assign({}, state, {});
  default:
    return state;
  }
};