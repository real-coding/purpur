import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const defaultTheme = {
  colors: {
    primary: '#C400AB'
  },
  borderRadius: '0.5rem',
  formElementsHeight: '4rem'
};

const ThemeProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
);

export default ThemeProvider;
