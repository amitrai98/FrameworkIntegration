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
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 11,
          }}>
          Example of general Concepts
        </Text>
        <View style={{alignItems: 'center', margin: 10, flex: 1}}>
          <PromiseExp />
        </View>
      </View>
    );
  }
}

export default GeneralConcepts;
