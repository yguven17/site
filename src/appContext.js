import React from "react";

const AppContext = React.createContext();

const AppProvider = function ({ children }) {
  const [isExpanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => setExpanded((prevState) => !prevState);

  const closeExpanded = function () {
    setTimeout(function () {
      setExpanded(false);
    }, 250);
  };

  return (
    <AppContext.Provider
      value={{
        isExpanded,
        toggleExpanded,
        closeExpanded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);

export { AppContext, AppProvider };
