import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext({});

type Props = {
  children: JSX.Element;
};

const GlobalContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState([]);

  return (
    <GlobalContext.Provider value={{ stories }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContext, GlobalContextProvider };
