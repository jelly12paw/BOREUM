import React, { createContext, useContext, useEffect, useState } from "react";

export const DarkmodeContext = createContext<{
  darkmode: boolean;
  toggleDarkmode: () => void;
}>({
  darkmode: false,
  toggleDarkmode: () => {},
});

export function DarkmodeProvider({ children }: { children: React.ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    updateDarkmode(!darkmode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setDarkmode(isDark);

    updateDarkmode(isDark);

  }, []);

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

export const useDarkmode = () => useContext(DarkmodeContext);

function updateDarkmode(darkmode: boolean) {
  if (darkmode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}