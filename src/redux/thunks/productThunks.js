import { setProducts, setLoading, setError } from '../slices/productSlice';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../../api/services/productService';

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const products = await fetchProducts();
    dispatch(setProducts(products));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const newProduct = await createProduct(productData);
    dispatch(getProducts());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editProduct = (productId, productData) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await updateProduct(productId, productData);
    dispatch(getProducts());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeProduct = (productId) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    await deleteProduct(productId);
    dispatch(getProducts());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
