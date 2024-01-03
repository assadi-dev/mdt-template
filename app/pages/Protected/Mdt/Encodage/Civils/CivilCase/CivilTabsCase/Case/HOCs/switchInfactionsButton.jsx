import React from "react";

/**
 *
 * @param {React.ComponentElement} Component
 *
 * @returns
 */
export const switchInfactionsButton = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};
