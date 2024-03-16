import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const themeStyles = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
    },
    dark: {
      backgroundColor: "#000",
      color: "#fff",
    },
  };

  return (
    <div style={themeStyles[theme]}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

export default ThemeSwitcher;