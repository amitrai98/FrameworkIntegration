import React from 'react';
import {Text, View} from 'react-native';

const Header = props => {
  const {headerTitle} = props;
  return (
    <View
      style={{
        backgroundColor: 'gray',
        height: '10%',
        paddingVertical: 10,
        paddingHorizontal: 2,
      }}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: 10,
        }}>
        <Text style={{alignSelf: 'center', color: 'white'}}>{headerTitle}</Text>
      </View>
    </View>
  );
};

export default Header;
