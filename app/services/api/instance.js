import { API_INSTANCE } from "../../config/constantes";
import axios from "axios";

export const intance = axios.create({
  baseURL: API_INSTANCE,
});

export default intance;