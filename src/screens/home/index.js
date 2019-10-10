import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData} from './HomeActions';
import Header from '../header';
import {FlatList} from 'react-native-gesture-handler';
import HomeListItem from './homecomponents/HomeListItems';
type Props = {};

export class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {id: 1, pageName: 'crashlatics'},
        {id: 2, pageName: 'GeneralConcepts'},
      ],
    };
  }

  onItemClick(item) {
    const {navigation} = this.props;
    navigation.navigate(item.pageName);
  }

  render() {
    const {pages} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header headerTitle={'Home'} />
        <FlatList
          data={pages}
          keyExtractor={item => item.pageName}
          renderItem={({item, index}) => {
            return (
              <HomeListItem
                item={item}
                onItemClick={item => this.onItemClick(item)}
              />
            );
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.HomeReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHomeData: bindActionCreators(getHomeData, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
const styles = StyleSheet.create({
  container: {},
});
