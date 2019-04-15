import React, { Component } from 'react';
import { View, Animated, RefreshControl, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { fetchCategories } from '../../redux/actions';

import { CategoryComponent } from '../../components';

class CategoriesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.props.dispatchFetchCategories()
  }

  onRefresh() {
    this.props.dispatchFetchCategories()
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <Animated.ScrollView
        ref={ref => this.scrollView = ref}
        scrollEventThrottle={1}
        refreshControl={
          <RefreshControl
            refreshing={this.props.category.fetching}
            onRefresh={this.onRefresh.bind(this)}
            title="Loading..."
            titleColor="#000000"
            colors={['#ffffff', '#ffffff', '#ffffff']}
            progressBackgroundColor="#000000"
          />
        }>
        <View>
          <FlatList
            data={this.props.category.categories}
            keyExtractor={this.keyExtractor}
            renderItem={({ item, index }) => (<CategoryComponent item={item} {...this.props} />)}
          />
        </View>
      </Animated.ScrollView>
    )
  }
}

const mapDispatchToProps = {
  dispatchFetchCategories: () => fetchCategories()
}

const mapStateToProps = state => ({
  post: state.post,
  category: state.category,
});


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);