import React, { createContext, useContext, useEffect, useState } from 'react'


const ModeContext = createContext();

const ThemeContext = ({children}) => {

  const [theme, setTheme] = useState("light")

  const toggleButton = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
   <ModeContext.Provider value={{theme, toggleButton}}>
      {children}
   </ModeContext.Provider>
  )
}

export default ThemeContext;

export function useTheme(){
  return useContext(ModeContext);
}