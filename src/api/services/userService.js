import apiClient from '../apiClient';
import USER_ENDPOINTS from '../endpoints/userEndpoints';

export const fetchUsers = async () => {
  const response = await apiClient.get(USER_ENDPOINTS.GET_USERS);
  return response.data;
};

export const fetchUserById = async (userId) => {
  const response = await apiClient.get(USER_ENDPOINTS.GET_USER_BY_ID(userId));
  return response.data;
};

export const createUser = async (userData) => {
  const response = await apiClient.post(USER_ENDPOINTS.CREATE_USER, userData);
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await apiClient.put(USER_ENDPOINTS.UPDATE_USER(userId), userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await apiClient.delete(USER_ENDPOINTS.DELETE_USER(userId));
  return response.data;
};
