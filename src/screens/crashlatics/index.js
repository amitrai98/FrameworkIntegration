import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import Header from '../header';
type Props = {};
import crashlytics from '@react-native-firebase/crashlytics';

export class CrashLatics extends Component<Props> {
  constructor(Props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }
  crashTheApp(text) {
    if (text != undefined) crashlytics().log(text);
    else crashlytics().log('Testing crash');

    crashlytics().crash();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'CrashLatics'} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TextInput />
          <TouchableOpacity
            onPress={() => {
              this.crashTheApp();
            }}
            style={{backgroundColor: 'green'}}>
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                color: 'white',
                alignSelf: 'center',
              }}>
              Crash Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CrashLatics;
