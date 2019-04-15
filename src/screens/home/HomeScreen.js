import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { PostsComponent } from '../../components';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    topBar: {
      visible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <PostsComponent {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;