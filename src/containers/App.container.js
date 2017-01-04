import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import _ from 'underscore';
import { actions } from '../reducers/notes.reducer';
import Notes from '../components/Notes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export class App extends Component {

  componentWillMount () {
    this.props.getNotes();
  }

  render () {
    console.log(this.props.notes);
    return (
      <View style={styles.container}>
        <Notes
          notes={this.props.notes} />
      </View>
    )
  }
};

App.displayName = 'App';

const mapStateToProps = (state) => {
  return {
    notes: state.notes.toJS().notes
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getNotes: actions.getNotesAction
  }, dispatch);
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);
