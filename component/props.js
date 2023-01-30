import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class props extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.a} </Text>
      </View>
    )
  }
}
