import { IProduct } from "../models/IProduct";
import { get } from "./serviceBase";

const BASE_URL = import.meta.env.VITE_PRODUCTS_BASE_URL;

export const getProducts = async (): Promise<IProduct[]> => {
  return await get<IProduct[]>(BASE_URL);
};
