import React, { Component } from 'react';
import { Animated, View } from 'react-native';

import { PostComponent } from '../../components';

class PostScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Animated.ScrollView
        ref={ref => this.scrollView = ref}
        scrollEventThrottle={1}>
        <View>
          <PostComponent item={this.props.post} readMore={true} {...this.props} />
        </View>
      </Animated.ScrollView>
    )
  }
}

export default PostScreen;