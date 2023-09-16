import { useState } from "react";

/** Detemination l'etat du process **/
const useProcess = () => {
  const [process, setProcess] = useState(false);

  const endProcess = () => setProcess((prevState) => (prevState = false));
  const startProcess = () => setProcess((prevState) => (prevState = true));
  const toggleProcess = () =>
    setProcess((prevState) => (prevState = !prevState));

  return {
    process,
    endProcess,
    startProcess,
    toggleProcess,
  };
};

export default useProcess;
