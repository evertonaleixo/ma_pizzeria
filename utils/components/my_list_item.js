import React from 'react'
import { connect } from 'react-redux'
import renderIf from './renderIf';


import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';


class MyListItem extends React.PureComponent {
    _onPress = () => {
        if(this.props.onPressItem)
            this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        const text = this.props.title;
        const vote = (this.props.vote ? (this.props.vote) : '');

        return (
        <TouchableOpacity onPress={this._onPress}>
            <View style={styles.item}>
                <View style={styles.itemText} >
                    <Text style={styles.carteLine} >
                        {text}
                    </Text>
                </View>
                {renderIf(this.props.vote)(
                    <View style={styles.itemVote} >
                        <Text style={styles.carteLine} >
                            {vote}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 20,
    },
    carteLine: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      color: "grey",
      fontSize: 20,
      padding: 15,
    },
    item: {
      flexDirection: 'row',
        
    },
    itemText: {
        flex: 5,
    },
    itemVote: {
        flex: 1,
    }
});

export default connect()(MyListItem);