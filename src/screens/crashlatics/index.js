import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../header';
type Props = {};

export class CrashLatics extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText={'CrashLatics'} />
        <Text>CrashLatics page</Text>
      </View>
    );
  }
}

export default CrashLatics;
