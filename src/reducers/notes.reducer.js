import { createAction, handleActions } from 'redux-actions';
import { getNotes, addNote } from '../helpers/api';
import Immutable from 'immutable';
import _ from 'underscore';

const GET_NOTES = 'GET_NOTES';
const ADD_NOTE = 'ADD_NOTE';

const getNotesAction = createAction(GET_NOTES, getNotes);
const addNotesAction = createAction(ADD_NOTE, addNote);

export const actions = {
  getNotesAction,
  addNotesAction
};

const initialState = Immutable.fromJS({
  notes: [],
  notesWithId: []
});

const notes = handleActions({
  GET_NOTES_FULFILLED: (state = initialState, action) => {
    return state.set('notes', Immutable.fromJS(_.pluck(action.payload, 'note')));
  },
  ADD_NOTE_FULFILLED: (state = initialState, action) => {

  },
  ADD_NOTE_REJECTED: (state = initialState, action) => {

  }
}, initialState);

export default notes;
