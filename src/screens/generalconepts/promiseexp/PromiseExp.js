import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';

type Props = {};

export class PromiseExp extends Component<Props> {
  showPromiseExampe() {
    const calculateSum = new Promise((resolve, reject) => {
      resolve('sum is 10');
    });

    calculateSum
      .then(response => {
        alert(`response from promise is ${response} ${Config.API_URL}`);
      })
      .catch(error => {
        alert(`error is ${error}`);
      });
  }

  showAsyncExample() {
    const asyncData = async () => {
      try {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('data after 1 sec');
          }, 1000);
        });

        let result = await promise;
        alert(`respons is ${result}`);
      } catch (error) {
        alert(`some error ${error}`);
      }
    };

    asyncData();

    // asyncData
    //   .then(result => alert(`respons is ${result}`))
    //   .catch(error => alert(`some error ${error}`));
  }

  render() {
    return (
      <View style={{flex: 1, margin: 10}}>
        <TouchableOpacity onPress={() => this.showPromiseExampe()}>
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

        <TouchableOpacity
          style={{marginTop: 10}}
          onPress={() => this.showAsyncExample()}>
          <Text
            style={{
              backgroundColor: 'red',
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            initiate async await
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PromiseExp;
