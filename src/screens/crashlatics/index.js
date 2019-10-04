import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../header';
type Props = {};
import crashlytics from '@react-native-firebase/crashlytics';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class CrashLatics extends Component<Props> {
  crashTheApp(text) {
    if (text != undefined) crashlytics().log(text);
    else crashlytics().log('Testing crash');

    crashlytics().crash();
  }
  render() {
    return (
      <View>
        <Header headerText={'CrashLatics'} />
        <View>
          <TouchableOpacity
            onPress={() => {
              this.crashTheApp();
            }}
            style={{backgroundColor: 'green'}}>
            <Text style={{paddingVertical: 10, paddingHorizontal: 15}}>
              Crash Now
            </Text>
          </TouchableOpacity>
        </View>
        <Text>CrashLatics page</Text>
      </View>
    );
  }
}

export default CrashLatics;
