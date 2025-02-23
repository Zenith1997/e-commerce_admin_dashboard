const USER_ENDPOINTS = {
  GET_USERS: '/users',
  GET_USER_BY_ID: (userId) => `/users/${userId}`,
  CREATE_USER: '/users',
  UPDATE_USER: (userId) => `/users/${userId}`,
  DELETE_USER: (userId) => `/users/${userId}`,
};

export default USER_ENDPOINTS;
