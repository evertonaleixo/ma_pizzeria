import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-native-material-dropdown';
 
import { Button, StyleSheet, Text, View, Modal} from 'react-native';

class VotingScreen extends React.Component {

    constructor(props){
      super(props);

      this.vote = this.vote.bind(this);
      this.onChangeText = this.onChangeText.bind(this);

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

  componentDidMount() {
    this.setState({
      pizzaSelected: 'none',
      ingredients: '',
      modalVisible: false,
      pizzasToVote: [
        {
          value: 'APRESUNTADA',
        },
        {
          value: 'CROCANTE',
        },
        {
          value: 'MILHO',
        },
        {
          value: 'MUSSARELA',
        },
        {
          value: 'TRADICIONAL',
        },
        {
          value: 'ALHO E ÓLEO',
        },
        {
          value: 'BACON',
        },
        {
          value: 'CALABRESA',
        },
        {
          value: 'ESCAROLA',
        },
        {
          value: 'FRANGO',
        },
        {
          value: 'FRANGO C/ CATUPIRY',
        },
        {
          value: 'FRAN-MILHO',
        },
        {
          value: 'MARGUERITA',
        },
        {
          value: 'MEXICANA',
        },
        {
          value: 'NAPOLITANA',
        },
        {
          value: 'PAULISTA',
        },
        {
          value: 'PORTUGUESA',
        },
        {
          value: 'TOSCANA',
        },
        {
          value: 'ALICHE',
        },
        {
          value: 'AMARELINHA',
        },
        {
          value: 'ATUM',
        },
        {
          value: 'CAMPESTRE',
        },
        {
          value: 'CAPRI',
        },
        {
          value: 'CARIOCA',
        },
        {
          value: 'CATARINA',
        },
        {
          value: 'CHEDDAR',
        },
        {
          value: 'LOMBO COM CATUPIRY',
        },
        {
          value: 'MILHO COM BACON',
        },
        {
          value: 'QUATRO QUEIJOS',
        },
        {
          value: 'VEGETARIANA',
        },
        {
          value: 'BACON CROCANTE',
        },
        {
          value: 'BOLONHESA',
        },
        {
          value: 'BRÓCOLIS',
        },
        {
          value: 'FRAN-CHEDDAR',
        },
        {
          value: 'HAVAIANA',
        },
        {
          value: 'ITALIANA',
        },
        {
          value: 'PALMITO',
        },
        {
          value: 'PARMEGIANA',
        },
        {
          value: 'PIZZAIOLO',
        },
        {
          value: 'SICILIANA',
        },
        {
          value: 'TROPICAL',
        },
        {
          value: 'UMITA',
        },
        {
          value: 'CALABRESA ESPECIAL',
        },
        {
          value: 'CANADENSE',
        },
        {
          value: 'CASTELHANA',
        },
        {
          value: 'CHEDDAR ESPECIAL',
        },
        {
          value: 'CURITIBA',
        },
        {
          value: 'DO CHEFF',
        },
        {
          value: 'DO SOGRO',
        },
        {
          value: 'ESCAROLA ESPECIAL',
        },
        {
          value: 'ESPANHOLA',
        },
        {
          value: 'QUATRO QUEIJOS ESTRAVAGANZA',
        },
        {
          value: 'BOLONHESA AO CREME QUATRO QUEIJOS',
        },
        {
          value: 'FRANGO AO CREME QUATRO QUEIJOS',
        },
        {
          value: 'PEPPERONI COM CHEDDAR',
        },
        {
          value: 'STROGONOFF DE CARNE',
        },
        {
          value: 'STROGONOFF DE FRANGO',
        },
        {
          value: 'TOMATE SECO COM RÚCULAS',
        },
        {
          value: 'CAMARÃO NA CHAPA',
        },
        {
          value: 'CAMARÃO AO CREME QUATRO QUEIJOS',
        },
        {
          value: 'GAÚCHA',
        },
        {
          value: 'MIGNON COM CEBOLA',
        },
        {
          value: 'MIGNON COM CHEDDAR',
        },
        {
          value: 'MIGNON COM FUNGUI',
        },
        {
          value: 'MIGNON COM MOLHO MADEIRA',
        },
        {
          value: 'MILLANO',
        },
        {
          value: 'PICANHA',
        },
        {
          value: 'STROGONOFF DE CAMARÃO',
        },
        {
          value: 'STROGONFF DE MIGNON',
        }
      ]
    });
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  vote() {
    this.openModal();
  }

  onChangeText(pizzaSelected, idx) {
    this.setState({pizzaSelected});
  }

  render() {
    let data = this.state ? this.state.pizzasToVote : [];
    let modalVisible = this.state ? this.state.modalVisible : false;
    let pizzaSelected = this.state ? this.state.pizzaSelected : '';

    return (
      <View>
        <Text style={styles.header}>
          Voce pode votar em 3 pizzas de sua preferência.
        </Text>

        <Dropdown
          label='Escolha a pizza que deseja'
          data={data}
          onChangeText={this.onChangeText}
        />

        <Modal
              visible={modalVisible}
              animationType={'slide'}
              onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>Obrigado pelo seu voto na pizza {pizzaSelected}. Ele já esta contado. Muito Obrigado.</Text>
              <Button
                onPress={this.closeModal}
                title='Continuar votando'
                color="#841584"
                accessibilityLabel='Continuar votando'
              />
            </View>
          </View>
        </Modal>

        <Button
          onPress={ this.vote }
          title='Votar'
          color="#841584"
          accessibilityLabel='Votar'
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

export default connect()(VotingScreen);
