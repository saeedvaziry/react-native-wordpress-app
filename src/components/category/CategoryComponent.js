import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { ListItem, Text } from 'native-base';

import { HOME_SCREEN } from '../../navigation/Screens';

class CategoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showPosts() {
    Navigation.push(this.props.componentId, {
      component: {
        name: HOME_SCREEN,
        passProps: {
          cat: this.props.item
        },
        options: {
          topBar: {
            title: {
              text: this.props.item.name
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <ListItem onPress={() => this.showPosts()}>
        <Text>{this.props.item.name}</Text>
      </ListItem>
    )
  }
}

export default CategoryComponent;