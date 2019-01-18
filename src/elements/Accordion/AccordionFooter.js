// @flow
import React from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import { uiColors, fontWeights } from 'utils';
import { ifProp } from 'styled-tools';

import Button from 'elements/Button';

type Props = {
  footerLink: string,
  buttonText: string,
  toggleClose: () => boolean,
};

const AccordionFooterContainer = styled.footer`
  bottom: ${ifProp('open', '0', '-80px')};
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px 3%;
  background: ${colors.white};
  align-items: center;
  transition-timing-function: ease, ease;
  transition-duration: 400ms, 1000ms;
  transition-property: all, background;
  transition-delay: 0s, 300ms;
  z-index: ${ifProp('open', '40', '10')};
  border-top: 1px solid ${colors.gray};
  border-bottom: 1px solid ${colors.gray};
`;

const AccordionFooterLink = styled.a`
  color: ${uiColors('text.light')};
  font-weight: ${fontWeights('light')};
  cursor: pointer;
`;

const AccordionFooter = ({ footerLink, buttonText, toggleClose }: Props) => (
  <AccordionFooterContainer>
    <AccordionFooterLink onClick={toggleClose(false)}>{footerLink}</AccordionFooterLink>
    <Button size="sm" buttonModifiers={['buttonPrimary']} onClick={toggleClose(true)}>
      {buttonText}
    </Button>
  </AccordionFooterContainer>
);

export default AccordionFooter;