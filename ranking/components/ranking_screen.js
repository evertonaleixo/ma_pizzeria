import React from 'react'
import { connect } from 'react-redux'

import { StyleSheet, FlatList } from 'react-native';
import MyListItem from '../../utils/components/my_list_item'

class RankingScreen extends React.Component {

    constructor(props){
      super(props);
    }

  componentDidMount() {

  }

  render() {
    let pizzaCarte = [
      {
        key: 'APRESUNTADA',
        votes: 33
      },
      {
        key: 'CROCANTE',
        votes: 27
      },
      {
        key: 'MILHO',
        votes: 26
      },
      {
        key: 'MUSSARELA',
        votes: 22
      },
      {
        key: 'TRADICIONAL',
        votes: 20
      },
      {
        key: 'ALHO E ÓLEO',
        votes: 19
      },
      {
        key: 'BACON',
        votes: 18
      },
      {
        key: 'CALABRESA',
        votes: 15
      },
      {
        key: 'ESCAROLA',
        votes: 15
      },
      {
        key: 'FRANGO',
        votes: 13
      },
      {
        key: '',
        votes: ''
      }
    ];

    return (
        <FlatList
          data={pizzaCarte}
          renderItem={({item}) => <MyListItem style={styles.carteLine} title={item.key} onPressItem={this.click} id={item.key} vote={item.votes} />}
        />
    );
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});

export default connect()(RankingScreen);
