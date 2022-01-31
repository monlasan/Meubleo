import axios from 'axios';
import create from 'zustand';

let productsList = [];

await axios
  .get('http://localhost:5000/api/products/')
  .then((resp) => {
    productsList = resp.data;
  })
  .catch((err) => {
    console.error(err);
  });

let products = (set) => ({
  products: productsList,
  product: {},
  getProductById: (id) => {
    set((state) => ({ product: state.products.find((p) => p._id === id) }));
  },
  addProduct: (product) => {
    set((state) => ({ products: [...state.products, product] }));
  },
});

export const useProductStore = create(products);
