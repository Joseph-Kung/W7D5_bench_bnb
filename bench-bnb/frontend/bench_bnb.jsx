import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


// TEST
import { login, logout, signup } from './util/session_api_util';
import { loginUser, logoutUser, signupUser } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // test
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.loginUser = loginUser;
  window.logoutUser = logoutUser;
  window.signupUser = signupUser;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
