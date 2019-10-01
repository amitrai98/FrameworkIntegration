import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
type Props = {};

const ListItem = props => {
  const {item, onItemClick} = props;
  return (
    <View style={{alignItems: 'center', marginTop: 20}}>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: 'red',
          borderRadius: 10,
        }}
        onPress={() => onItemClick(item)}>
        <Text style={{color: 'white'}}>{item.pageName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
