// @flow
import React, { Fragment } from 'react';
import type { Node } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'config/globalStyles';
import configureFonts from 'config/configureFonts';
import theme from 'config/theme';

type Props = { children: Node };

const GlobalContainer = ({ children }: Props) => {
  configureFonts(theme);
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles theme={theme} suppressMultiMountWarning />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default GlobalContainer;
