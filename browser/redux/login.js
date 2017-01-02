import axios from 'axios';
import {browserHistory} from 'react-router';

/* -----------------  ACTIONS   -------------------- */

const SET_CURRENT_USER = 'SET_CURRENT_USER';
const LOG_OUT = 'LOG_OUT';

/* -----------------  ACTION CREATORS   -------------------- */

export function setCurrentUser(user) {
  browserHistory.push('/');
  return ({type: SET_CURRENT_USER, user});
}

function logout() {
  return {type: LOG_OUT};
}

/* -----------------  DISPATCHERS   -------------------- */

export function authenticate(email, password) {
  return dispatch => {
    axios.post('/login', {email, password})
    .then(res => res.data)
    .then(user => dispatch(setCurrentUser(user)))
    .catch(console.error);
  }
}

export function clearSession() {
  return dispatch => {
    axios.get('/logout')
    .then(() => {
      dispatch(logout());
    })
    .catch(console.error);
  }
}

/* -----------------  REDUCER   -------------------- */

export default function(state = null, action) {
  switch (action.type) {
    case SET_CURRENT_USER: 
      return action.user;
    case LOG_OUT: 
      return null;
    default: 
      return state;
  } 
}