import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.js';

interface IThemeState {
  themeColor: string;
}

const ThemeSelector = () => {
  const { changeTheme } = useTheme();
  const [themeState, setThemeState] = useState<IThemeState>({ themeColor: '' });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setThemeState({
      ...themeState,
      [e.target.name]: value,
    });
    changeTheme(themeState);
  };

  return (
    <div>
      <label htmlFor="themeColor">THEME COLOR: </label>
      <input
        type="color"
        id="themeColor"
        name="themeColor"
        value={themeState.themeColor}
        onChange={handleChange}
      />
    </div>
  );
};

export default ThemeSelector;
