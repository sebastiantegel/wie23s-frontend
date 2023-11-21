import axios from "axios";
import { IQuote } from "./models/IQuote";

const QUOTE_URL = "https://api.kanye.rest/";

export const getQuote = async () => {
  const response = await fetch(QUOTE_URL);
  //   console.log("Response:", response);
  const data: IQuote = await response.json();
  //   console.log("Data:", data);
  return data;
};

// axios -> response -> json(response.body) -> response.data
export const getWithAxios = async () => {
  const response = await axios.get<IQuote>(QUOTE_URL);
  console.log(response.data);
  return response.data;
};
