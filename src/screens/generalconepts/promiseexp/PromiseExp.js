import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = {};

export class PromiseExp extends Component<Props> {
  showPromiseExampe() {
    const calculateSum = new Promise((resolve, reject) => {
      resolve('sum is 10');
    });

    calculateSum
      .then(response => {
        console.log(`response from promise is ${response}`);
      })
      .catch(error => {
        console.log('error is ');
      });
  }

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <TouchableOpacity onPress={this.showPromiseExampe()}>
          <Text
            style={{
              backgroundColor: 'red',
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            initiate promise
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PromiseExp;
