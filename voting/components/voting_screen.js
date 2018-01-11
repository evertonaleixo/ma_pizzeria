import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, Text } from 'react-native';

class VotingScreen extends React.Component {

    constructor(props){
      super(props);
    }

  componentDidMount() {
    this.props.pizzasToVote = [
      {
        key: 'APRESUNTADA'
      },
      {
        key: 'CROCANTE'
      },
      {
        key: 'MILHO'
      },
      {
        key: 'MUSSARELA'
      },
      {
        key: 'TRADICIONAL'
      },
      {
        key: 'ALHO E ÓLEO'
      },
      {
        key: 'BACON'
      },
      {
        key: 'CALABRESA'
      },
      {
        key: 'ESCAROLA'
      },
      {
        key: 'FRANGO'
      },
      {
        key: 'FRANGO C/ CATUPIRY'
      },
      {
        key: 'FRAN-MILHO'
      },
      {
        key: 'MARGUERITA'
      },
      {
        key: 'MEXICANA'
      },
      {
        key: 'NAPOLITANA'
      },
      {
        key: 'PAULISTA'
      },
      {
        key: 'PORTUGUESA'
      },
      {
        key: 'TOSCANA'
      },
      {
        key: 'ALICHE'
      },
      {
        key: 'AMARELINHA'
      },
      {
        key: 'ATUM'
      },
      {
        key: 'CAMPESTRE'
      },
      {
        key: 'CAPRI'
      },
      {
        key: 'CARIOCA'
      },
    ];
  }

  render() {
    return (
      <Text style={styles.header}>
        Voce pode votar em 3 pizzas de sua preferência.
      </Text>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(VotingScreen);
