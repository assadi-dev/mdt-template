import React, { useCallback, useState } from "react";
import Api from "../services/api/instance";

/**
 *
 * @returns Retourne la listes des rookies
 */
const useFetchRookieList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchRookie = useCallback(async () => {
    try {
      const resp = await Api.get(`agents/rookies/list`);
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
    fetchRookie,
  };
};

export default useFetchRookieList;
