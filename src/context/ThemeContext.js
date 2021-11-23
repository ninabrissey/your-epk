import { useState, createContext, useContext } from 'react';

// FOR TS
// export enum Theme {
//   themeColor = '#ffb179',
// }

// interface IThemeContext {
//   theme: Theme;
//   changeTheme: any
// }

// const ThemeContext = createContext<IThemeContext>({
//   theme: Theme.themeColor, changeTheme: (theme) => void
// });

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  //FOR TS
  // const ThemeContextProvider = ({ children }: any) => {

  const [theme, setTheme] = useState({ themeColor: '' });

  const changeTheme = (selectedTheme) => {
    // add post or patch for theme, then use the response to set the theme
    setTheme(selectedTheme);
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ ...theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

export { ThemeContextProvider, useTheme };
