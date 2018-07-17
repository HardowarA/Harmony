import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {login, signup, logout} from './actions/session_actions';
import {fetchServers, fetchServer, createServer, deleteServer} from './actions/server_actions';
import {fetchChannels, fetchChannel, createChannel, deleteChannel} from './actions/channel_actions';


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  window.fetchServers = fetchServers;
  window.fetchServer = fetchServer;
  window.createServer = createServer;
  window.deleteServer = deleteServer;

  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannel;
  window.createChannel = createChannel;
  window.deleteChannel = deleteChannel;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
