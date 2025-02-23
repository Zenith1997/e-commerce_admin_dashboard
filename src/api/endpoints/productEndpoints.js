const PRODUCT_ENDPOINTS = {
  GET_PRODUCTS: '/products',
  GET_PRODUCT_BY_ID: (productId) => `/products/${productId}`,
  CREATE_PRODUCT: '/products',
  UPDATE_PRODUCT: (productId) => `/products/${productId}`,
  DELETE_PRODUCT: (productId) => `/products/${productId}`,
};

export default PRODUCT_ENDPOINTS;
