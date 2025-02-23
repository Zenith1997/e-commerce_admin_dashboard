import { setUsers, setLoading, setError } from '../slices/userSlice';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../api/services/userService';

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const users = await fetchUsers();
    dispatch(setUsers(users));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addUser = (userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const newUser = await createUser(userData);
    dispatch(getUsers());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editUser = (userId, userData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await updateUser(userId, userData);
    dispatch(getUsers());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeUser = (userId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await deleteUser(userId);
    dispatch(getUsers());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
