
export const useColorScheme = (): {
  colorScheme: 'light';
  setColorScheme: (mode: 'light' | 'dark' | 'system') => void;
  toggleColorScheme: () => void;
} => {
  return {
    colorScheme: 'light',
    setColorScheme: () => {},
    toggleColorScheme: () => {}
  };
};
