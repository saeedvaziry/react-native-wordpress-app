import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List } from 'native-base';

import { CategoriesComponent } from '../../components';

class CategoriesScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <CategoriesComponent {...this.props} />
        </List>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CategoriesScreen;