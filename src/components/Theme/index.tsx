import React from 'react';

import { useAppSelector, useTheme } from 'shared/hooks';
import { ChildrenInterface } from 'shared/types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export const Theme = ({ children }: ChildrenInterface) => {
  const mode = useAppSelector(({ app: { theme } }) => theme);

  const [theme] = useTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme};
    background: ${({ theme }) => theme.Background.colors.default};
    padding: 0;
    margin: 0;
    font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
    "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
    "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100%;
  max-width: 100vw;
  overflow-x: hidden;
}
`;
