import React, { Component } from 'react';
import { View, Animated, RefreshControl, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions';

import { PostComponent } from '../../components';

class PostsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    this.props.dispatchFetchPosts(this.state.page, this.props.cat ? this.props.cat : null, [])
  }

  onRefresh() {
    this.setState({ page: 1 })
    if (this.props.post.category) {
      this.props.dispatchFetchPosts(this.state.page, this.props.post.category, [])
    } else {
      this.props.dispatchFetchPosts(this.state.page, null, [])
    }
  }

  nextPage(page) {
    if (this.props.post.hasPost) {
      this.setState({ page: page })
      if (this.props.post.category) {
        this.props.dispatchFetchPosts(page, this.props.post.category, this.props.post.posts)
      } else {
        this.props.dispatchFetchPosts(page, null, this.props.post.posts)
      }
    }
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <Animated.ScrollView
        ref={ref => this.scrollView = ref}
        onScroll={(e) => {
          let windowHeight = Dimensions.get('window').height
          let height = e.nativeEvent.contentSize.height
          let offset = e.nativeEvent.contentOffset.y
          if (windowHeight + offset >= height) {
            if (!this.props.post.fetching) {
              this.nextPage(this.state.page + 1)
            }
          }
        }}
        scrollEnabled={!this.props.post.fetching}
        scrollEventThrottle={1}
        refreshControl={
          <RefreshControl
            refreshing={this.props.post.fetching}
            onRefresh={this.onRefresh.bind(this)}
            title="Loading..."
            titleColor="#000000"
            colors={['#ffffff', '#ffffff', '#ffffff']}
            progressBackgroundColor="#000000"
          />
        }>
        <View>
          <FlatList
            data={this.props.post.posts}
            keyExtractor={this.keyExtractor}
            renderItem={({ item, index }) => (<PostComponent item={item} {...this.props} />)}
          />
        </View>
      </Animated.ScrollView>
    )
  }
}

const mapDispatchToProps = {
  dispatchFetchPosts: (page, category, oldPosts) => fetchPosts(page, category, oldPosts)
}

const mapStateToProps = state => ({
  post: state.post,
  category: state.category,
});


export default connect(mapStateToProps, mapDispatchToProps)(PostsComponent);