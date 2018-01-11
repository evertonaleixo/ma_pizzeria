import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, FlatList, ToastAndroid } from 'react-native';

import MyListItem from '../../utils/components/my_list_item'


class CarteScreen extends React.Component {

    constructor(props){
      super(props);

      this.click = this.click.bind(this);
    }

  componentDidMount() {
    this.setState({
      pizzaCarte: [
        {
          key: 'APRESUNTADA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO E MUSSARELA'
        },
        {
          key: 'CROCANTE',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA (2 CAMADAS), CATUPIRY, BATATA PALHA (DEPOIS DE ASSADA)'
        },
        {
          key: 'MILHO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA E MILHO'
        },
        {
          key: 'MUSSARELA',
          ingredients: 'MOLHO DE TOMATE E MUSSARELA (2 CAMADAS)'
        },
        {
          key: 'TRADICIONAL',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, TOMATES E MUSSARELA'
        },
        {
          key: 'ALHO E ÓLEO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, ALHO E AZEITE DE OLIVA'
        },
        {
          key: 'BACON',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA E BACON'
        },
        {
          key: 'CALABRESA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA E CALABRESA'
        },
        {
          key: 'ESCAROLA',
          ingredients: 'MOLHO DE TOMATE, ESCAROLA (REFOGADA), BACON, ALHO (OPCIONAL) E MUSSARELA'
        },
        {
          key: 'FRANGO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO E REFOGADO'
        },
        {
          key: 'FRANGO C/ CATUPIRY',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO DE CATUPIRY'
        },
        {
          key: 'FRAN-MILHO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO E MILHO'
        },
        {
          key: 'MARGUERITA',
          ingredients: 'MOLHO DE TOMATE, TOMATES, PARMESÃO, MANJERICÃO, AZEITE DE OLIVA E MUSSARELA'
        },
        {
          key: 'MEXICANA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA RALADA, PIMENTÃO VERDE E PIMENTA-CALABRESA'
        },
        {
          key: 'NAPOLITANA',
          ingredients: 'MOLHO DE TOMATE, TOMATES, PROVOLONE E MUSSARELA'
        },
        {
          key: 'PAULISTA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, MILHO, ERVILHA, PALMITO E AZEITONAS'
        },
        {
          key: 'PORTUGUESA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, OVOS, CEBOLA E AZEITONAS'
        },
        {
          key: 'TOSCANA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA E OVOS'
        },
        {
          key: 'ALICHE',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, ALICHE E TOMATES'
        },
        {
          key: 'AMARELINHA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, OVOS E CHEDDAR'
        },
        {
          key: 'ATUM',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, ATUM, CEBOLA E AZEITONAS'
        },
        {
          key: 'CAMPESTRE',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, BACON, MILHO, TOMATES E OVOS'
        },
        {
          key: 'CAPRI',
          ingredients: 'MOLHO DE TOMATE, TOMATES, MILHO, PARMESÃO E MUSSARELA'
        },
        {
          key: 'CARIOCA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, MILHO E CATUPIRY'
        },
        {
          key: 'CATARINA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, OVOS E CATUPIRY'
        },
        {
          key: 'CHEDDAR',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA E CHEDDAR'
        },
        {
          key: 'LOMBO COM CATUPIRY',
          ingredients: 'MOLHO DE TOMATE, LOMBO, MUSSARELA E CATUPIRY'
        },
        {
          key: 'MILHO COM BACON',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, MILHO E BACON'
        },
        {
          key: 'QUATRO QUEIJOS',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, PROVOLONE, PARMESÃO E CATUPIRY'
        },
        {
          key: 'VEGETARIANA',
          ingredients: 'MOLHO DE TOMATE, ESCAROLA REFOGADA, PALMITO, MILHO, TOMATES, AZEITONAS E MUSSARELA'
        },
        {
          key: 'BACON CROCANTE',
          ingredients: 'MOLHO DE TOMATE, BACON, BATATA PALHA E MUSSARELA'
        },
        {
          key: 'BOLONHESA',
          ingredients: 'MOLHO DE TOMATE, BOLONHESA, MOLHO PARMEGIANA, PARMESÃO E MUSSARELA'
        },
        {
          key: 'BRÓCOLIS',
          ingredients: 'MOLHO DE TOMATE, BACON, BRÓCOLIS REFOGADO, CHAMPIGNON, ALHO, CATUPIRY E MUSSARELA'
        },
        {
          key: 'FRAN-CHEDDAR',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO E CHEDDAR'
        },
        {
          key: 'HAVAIANA',
          ingredients: 'MUSSARELA, LOMBO E ABACAXI'
        },
        {
          key: 'ITALIANA',
          ingredients: 'MOLHO DE TOMATE, SALAME ITALIANO, TOMATES, PARMESÃO E MUSSARELA'
        },
        {
          key: 'PALMITO',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, PALMITO E AZEITONAS'
        },
        {
          key: 'PARMEGIANA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MOLHO PARMEGIANA, PARMESÃO E MUSSARELA'
        },
        {
          key: 'PIZZAIOLO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO, PALMITO, MILHO, CALABRESA E CATUPIRY'
        },
        {
          key: 'SICILIANA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, BACON, CHAMPIGNON, PIMENTÕES VERDES E CATUPIRY'
        },
        {
          key: 'TROPICAL',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FRANGO DESFIADO AO MOLHO, MILHO, ERVILHA, OVOS E CATUPIRY'
        },
        {
          key: 'UMITA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, MILHO, PALMITO E CATUPIRY'
        },
        {
          key: 'CALABRESA ESPECIAL',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, CALABRESA, CHAMPIGNON E GORGONZOLA'
        },
        {
          key: 'CANADENSE',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, CHAMPIGNON, PALMITO E CATUPIRY'
        },
        {
          key: 'CASTELHANA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, OVOS, CEBOLA E CATUPIRY'
        },
        {
          key: 'CHEDDAR ESPECIAL',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, CHAMPINON, PALMITO E CHEDDAR'
        },
        {
          key: 'CURITIBA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, LOMBO, BACON, PALMITO E AZEITONA'
        },
        {
          key: 'DO CHEFF',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, PALMITO, CHAMPIGNON E MOLHO BRANCO'
        },
        {
          key: 'DO SOGRO',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, ASPARGOS, CHAMPIGNON, MOLHO MADEIRA E PALMITO'
        },
        {
          key: 'ESCAROLA ESPECIAL',
          ingredients: 'MOLHO DE TOMATE, ESCAROLA REFOGADA, TOMATE SECO, CHAMPIGNON E MUSSARELA'
        },
        {
          key: 'ESPANHOLA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, FANGO DESFIADO AO MOLHO, CALABRESA RALADA, BACON, TOMATE PICADO E AZEITONAS'
        },
        {
          key: 'QUATRO QUEIJOS ESTRAVAGANZA',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, PROVOLONE, PARMESÃO, CHAMPIGNON, ALHO E CATUPIRY'
        },
        {
          key: 'BOLONHESA AO CREME QUATRO QUEIJOS',
          ingredients: 'MOLHO DE TOMATE, BOLONHESA AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA'
        },
        {
          key: 'FRANGO AO CREME QUATRO QUEIJOS',
          ingredients: 'MOLHO DE TOMATE, FRANGO AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA'
        },
        {
          key: 'PEPPERONI COM CHEDDAR',
          ingredients: 'MOLHO DE TOMATE,MUSSARELA, PEPPERONI, CHAMPIGNON E CHEDDAR'
        },
        {
          key: 'STROGONOFF DE CARNE',
          ingredients: 'MOLHO DE TOMATE, STROGONOFF DE CARNE, CHAMPIGNON, BATATA PALHA E MUSSARELA'
        },
        {
          key: 'STROGONOFF DE FRANGO',
          ingredients: 'MOLHO DE TOMATE, STROGONOFF DE FRANGO, CHAMPIGNON, BATATA PALHA E MUSSARELA'
        },
        {
          key: 'TOMATE SECO COM RÚCULAS',
          ingredients: 'MOLHO DE TOMATE, TOMATE SECO, MUSSARELA, RÚCULAS E AZEITE DE OLIVA (DEPOIS DE ASSADA)'
        },
        {
          key: 'CAMARÃO NA CHAPA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, CAMARÃO NA MANTEIGA, PIMENTÕES VERMELHOS, AMRELOS E VERDES, CEBOLA E AZEITONAS'
        },
        {
          key: 'CAMARÃO AO CREME QUATRO QUEIJOS',
          ingredients: 'MOLHO DE TOMATE, CAMARÃO AO MOLHO BRANCO, MOLHO QUATRO QUEIJOS, CREME DE LEITE, CATUPIRY E MUSSARELA'
        },
        {
          key: 'GAÚCHA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, COSTELA AO MOLHO DESFIADA, PROVOLONE, CEBOLA E CATUPIRY'
        },
        {
          key: 'MIGNON COM CEBOLA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E CEBOLA REFOGADA AO SHOYO'
        },
        {
          key: 'MIGNON COM CHEDDAR',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E CHEDDAR'
        },
        {
          key: 'MIGNON COM FUNGUI',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, MIGNON NA MANTEIGA E MOLHO FUNGUI'
        },
        {
          key: 'MIGNON COM MOLHO MADEIRA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA E MIGNON AO MOLHO MADEIRA'
        },
        {
          key: 'MILLANO',
          ingredients: 'MOLHO DE TOMATE, PRESUNTO, MUSSARELA, MIGNON, TOMATES PICADOS E AZEITONAS'
        },
        {
          key: 'PICANHA',
          ingredients: 'MOLHO DE TOMATE, MUSSARELA, PICANHA NA MANTEIGA, CATUPIRY, CHEDDAR E BATATA PALHA (OPCIONAL)'
        },
        {
          key: 'STROGONOFF DE CAMARÃO',
          ingredients: 'MOLHO DE TOMATE, STROGONOFF DE CAMARÃO, CHAMPIGNON, BATATA PALHA E MUSSARELA'
        },
        {
          key: 'STROGONFF DE MIGNON',
          ingredients: 'MOLHO DE TOMATE, STROGONOFF DE MIGNON, CHAMPIGNON, BATATA PALHA E MUSSARELA'
        },
        {
          key: '',
          votes: ''
        }
      ]
    });

  }

  click(id) {
    selected = this.state.pizzaCarte.filter( elem =>{ 
      return elem.key == id;
    });

    ToastAndroid.showWithGravity(
      selected[0].ingredients,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  render() {
    let pizzaCarte = this.state ? this.state.pizzaCarte : [];

    return (
        <FlatList
          data={pizzaCarte}
          renderItem={({item}) => <MyListItem title={item.key} onPressItem={this.click} id={item.key} />}
        />
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(CarteScreen);
