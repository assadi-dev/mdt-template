import React, { useEffect, useRef, useState } from "react";
import Api from "../services/api/instance";

const useGetAgentByMatricule = (matricule) => {
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  });

  const { isLoading, error, data } = state;
  const apbortControllerRef = useRef(new AbortController());
  /**
   * @param {string} matricule Matricule de l'agent
   */
  const fetchData = async (matricule) => {
    setState({ ...state, isLoading: true });
    try {
      apbortControllerRef.current?.abort();
      const res = await Api.get(`/agent/matricule/${matricule}`);
      setState({ ...state, data: res.data });
      return res.data;
    } catch (error) {
      let message = error.message;
      setState({ ...state, error: message });
    } finally {
      setState({ ...state, isLoading: false });
    }
  };

  return {
    isLoading,
    error,
    data,
    fetchData,
  };
};

export default useGetAgentByMatricule;
