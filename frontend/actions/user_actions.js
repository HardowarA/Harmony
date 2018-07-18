import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    user: payload.user
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return UserApiUtil.fetchUsers().then(users => {
      return dispatch(receiveUsers(users))
    });
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then(user => {
      return dispatch(receiveUser(user))
    });
  };
};
