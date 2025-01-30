import React, { createContext, useState } from "react";

// create the context

export const searchContext = createContext();

export const SearchProvider = ({ Children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <searchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {Children}
    </searchContext.Provider>
  );
};
