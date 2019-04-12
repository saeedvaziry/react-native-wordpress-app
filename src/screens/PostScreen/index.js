import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class PostScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);