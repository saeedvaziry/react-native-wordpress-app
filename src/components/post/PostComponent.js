import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Card, CardItem, Text } from 'native-base';
import Ripple from 'react-native-material-ripple';

import { POST_SCREEN } from '../../navigation/Screens';

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  showPost() {
    Navigation.push(this.props.componentId, {
      component: {
        name: POST_SCREEN,
        passProps: {
          post: this.props.item
        },
        options: {
          topBar: {
            title: {
              text: this.props.item.title.rendered
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View>
        {this.props.readMore && (
          <Card style={{ flex: 1 }}>
            <CardItem cardBody>
              {
                this.props.item.image && (
                  <Image source={{ uri: this.props.item.image, cache: 'only-if-cached' }} style={styles.postImage} />
                )
              }
            </CardItem>
            <CardItem>
              <Text style={styles.postTitle}>{this.props.item.title.rendered}</Text>
            </CardItem>
            <CardItem>

            </CardItem>
          </Card>
        )}
        {!this.props.readMore && (
          <Card style={{ flex: 1 }}>
            <Ripple
              style={{ flex: 1 }}
              onPress={this.showPost.bind(this)}>
              <CardItem cardBody>
                {
                  this.props.item.image && (
                    <Image source={{ uri: this.props.item.image, cache: 'only-if-cached' }} style={styles.postImage} />
                  )
                }
              </CardItem>
              <CardItem>
                <Text style={styles.postTitle}>{this.props.item.title.rendered}</Text>
              </CardItem>
            </Ripple>
          </Card>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postTitle: {
    width: '100%',
    flex: 1
  },
  postImage: {
    flex: 1,
    width: null,
    height: 200
  }
});

export default PostComponent