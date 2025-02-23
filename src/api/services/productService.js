import apiClient from '../apiClient';
import PRODUCT_ENDPOINTS from '../endpoints/productEndpoints';

export const fetchProducts = async () => {
  const response = await apiClient.get(PRODUCT_ENDPOINTS.GET_PRODUCTS);
  return response.data;
};

export const fetchProductById = async (productId) => {
  const response = await apiClient.get(PRODUCT_ENDPOINTS.GET_PRODUCT_BY_ID(productId));
  return response.data;
};

export const createProduct = async (productData) => {
  const response = await apiClient.post(PRODUCT_ENDPOINTS.CREATE_PRODUCT, productData);
  return response.data;
};

export const updateProduct = async (productId, productData) => {
  const response = await apiClient.put(PRODUCT_ENDPOINTS.UPDATE_PRODUCT(productId), productData);
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await apiClient.delete(PRODUCT_ENDPOINTS.DELETE_PRODUCT(productId));
  return response.data;
};
