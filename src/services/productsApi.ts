import type { ProductProps } from "../types";
import { api } from "./api";

export const getAllProducts = async (): Promise<ProductProps[]> => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch {
    throw new Error('Os produtos não foram encontrados.');
  }
}

export const getSingleProduct = async (productId: number) => {
  try {
    const res = await api.get(`/products/${productId}`);
    return res.data;

  } catch {
    throw new Error('O produto não foi encontrado.');

  }
}