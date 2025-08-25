import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,  // your DeepInfra API key
  baseURL: "https://api.deepinfra.com/v1/openai",
  dangerouslyAllowBrowser: true, // only if calling from frontend (React)
});

export default openai;
