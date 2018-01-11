import React from 'react'
import { connect } from 'react-redux'

import { Dropdown } from 'react-native-material-dropdown';
 
import { Button, StyleSheet, Text, View } from 'react-native';

class VotingScreen extends React.Component {

    constructor(props){
      super(props);

      this.vote = this.vote.bind(this);
      this.onChangeText = this.onChangeText.bind(this);
    }

  componentDidMount() {
    this.setState({
      pizzaSelected: 'none',
    });

    this.props.pizzasToVote = [
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
    ];
  }

  vote() {
    console.log(this.state);
  }

  onChangeText(pizzaSelected, idx) {
    this.setState({pizzaSelected});
  }

  render() {
    let data = [
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
    ];

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
  }
});

export default connect()(VotingScreen);
