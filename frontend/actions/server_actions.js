import * as ServerApiUtil from '../util/server_api_util';

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';

const receiveServers = (servers) => {
  return {
    type: RECEIVE_SERVERS,
    servers
  }
}

const receiveServer = (payload) => {
  return {
    type: RECEIVE_SERVER,
    server: payload.server,
    creator: payload.creator
  }
}

const removeServer = (payload) => {
  return {
    type: REMOVE_SERVER,
    serverId: payload.server.id,
    server: payload.server,
    creator: payload.creator,
    userIds: payload.server.userIds
  }
}

export const fetchServers = () => {
  return dispatch => {
    return ServerApiUtil.fetchServers().then(servers => {
      return dispatch(receiveServers(servers))
    });
  };
};

export const fetchServer = (id) => {
  return dispatch => {
    return ServerApiUtil.fetchServer(id).then(server => {
      return dispatch(receiveServer(server))
    });
  };
};

export const createServer = (server) => {
  return dispatch => {
    return ServerApiUtil.createServer(server).then(server => {
      return dispatch(receiveServer(server))
    });
  };
};

export const deleteServer = (serverId) => {
  return dispatch => {
    return ServerApiUtil.removeServer(serverId).then(server => {
      return dispatch(removeServer(server))
    });
  };
};
