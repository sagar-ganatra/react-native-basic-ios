import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  ListView,
  StyleSheet
} from 'react-native';
import _ from 'underscore';
import { addNote, getNotes } from '../helpers/api';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContainer: {
    flexDirection: 'row'
  },
  textInput: {
    borderWidth: 1,
    flex: 1
  },
  button: {
    padding: 5,
    backgroundColor: '#E3E3E3',
    borderWidth: 1
  }
});

export default class Notes extends Component {
  constructor (props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.notes),
      note: '',
      error: false
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(newProps.notes)
    });
  }

  handleSubmit () {
    addNote(this.state.note)
      .then(() => {
         getNotes()
            .then((res) => {
              this.setState({
                dataSource: this.ds.cloneWithRows(_.pluck(res, 'note'))
              });
            });
       });
    this.setState({
      note: ''
    });
  }

  renderRow (rowData) {
    return (
      <View>
        <Text> {rowData} </Text>
      </View>
    );
  }

  footer () {
    return (
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.textInput}
          value={this.state.note}
          onChangeText={(note) => this.setState({note})} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}>
          <Text> Submit </Text>
        </TouchableHighlight>
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={this.renderRow} />
        {this.footer()}
      </View>
    );
  }
}
