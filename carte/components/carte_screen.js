import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { StyleSheet, FlatList, View, Text, Button , Modal } from 'react-native';

import MyListItem from '../../utils/components/my_list_item'
import loadCarteAction from '../actions/load_carte_action'


class CarteScreen extends React.Component {

    constructor(props){
      super(props);

      this.click = this.click.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

  componentDidMount() {
    this.setState({
      ingredients: '',
      modalVisible: false,
    });

  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  click(id) {
    selected = this.props.pizzasReducer.pizzas.filter( elem =>{ 
      return elem.value == id;
    });

    this.setState({ingredients: selected[0].ingredients});

    this.openModal();
  }

  render() {
    let pizzaCarte = this.props.pizzasReducer.pizzas;
    let modalVisible = this.state ? this.state.modalVisible : false;
    let ingredients = this.state ? this.state.ingredients : false;

    return (
      <View>
        <FlatList
          data={pizzaCarte}
          renderItem={({item}) => <MyListItem title={item.value} onPressItem={this.click} id={item.value} />}
        />

        <Modal
              visible={modalVisible}
              animationType={'slide'}
              onRequestClose={this.closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <Text>{ingredients}</Text>
              <Button
                onPress={this.closeModal}
                title='Fechar'
                color="#841584"
                accessibilityLabel='Fechar'
              />
            </View>
          </View>
        </Modal>
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

function mapStateToProps(state) {
  return {
    pizzasReducer: state.pizzasReducer
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    loadCarteAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarteScreen);
