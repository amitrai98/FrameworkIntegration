import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../header';
import PromiseExp from './promiseexp/PromiseExp';
type Props = {};

export class GeneralConcepts extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerTitle={'General Concepts'} />
        <View style={{alignItems: 'center', margin: 10}}>
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: 'green',
                color: 'white',
              }}>
              promise example
            </Text>
            <PromiseExp />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GeneralConcepts;
