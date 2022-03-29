// Dependencies
import React from 'react';
import { ThemeProvider } from 'styled-components';

// Theme
import theme from './theme';

function ThemeLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default ThemeLayout;
