import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          id: '1',
          title: 'https://www.youtube.com/watch?v=p0mRIhK9seg',
        },
        {
          id: '2',
          title: 'https://www.youtube.com/watch?v=yauFhOqoXRc',
        },
        {
          id: '3',
          title: 'https://www.youtube.com/watch?v=uzS3WG6__G4',
        },
      ],
    };
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <WebView source={{uri: item.title}} style={styles.webView} />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  webView: {
    flex: 1,
  },
});
