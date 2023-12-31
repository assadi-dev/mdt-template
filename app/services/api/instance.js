import { API_INSTANCE } from "../../config/constantes";
import axios from "axios";

export const intance = axios.create({
  baseURL: API_INSTANCE,
  headers: {
    "Content-Type": "application/json",
  },
});

export default intance;

/**
 * Agent IRI
 * ``` api/agents/:idAgent ```
 */
export const agent_iri = `api/agents/`;
