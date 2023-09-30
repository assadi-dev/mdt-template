/**
 * Exectution d'une fonction apres un temps donnée
 * @param {VoidFunction} callback Fonction à executer
 * @param {*} delay temps du compte à rebour
 */
export const execDelayed = async (callback, delay) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      try {
        callback();
        resolve("Success");
        clearTimeout(timer);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
};
