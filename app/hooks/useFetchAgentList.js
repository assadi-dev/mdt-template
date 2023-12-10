import React, { useCallback, useRef, useState } from "react";
import Api from "../services/api/instance";

/**
 *
 * @returns Retourne la listes des agents
 */
const useFetchAgentList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const AbortControllerRef = useRef(new AbortController());
  const fetchAgents = useCallback(async () => {
    try {
      const resp = await Api.get(`agents/list`, {
        signal: AbortControllerRef.current?.signal,
      });
      setData(resp);
    } catch (error) {
      let message = error.message;
      if (error?.response?.data) message = error?.response?.data;
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    data,
    error,
    fetchAgents,
    AbortController: AbortControllerRef.current,
  };
};

export default useFetchAgentList;
