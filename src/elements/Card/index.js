// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import colors from 'config/colors';
import Typography from 'elements/Typography';
import CardContent from './CardContent';

const CardWrapper = styled.div`
  position: relative;
  border: 1px solid ${colors.gray};
  border-radius: 3px;
  background: ${colors.white};
  line-height: 1.5;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const CardTitle = styled(Typography)`
  width: 100%;
  padding: 16px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
`;

type Props = {
  title?: string,
  titleVariant?: string,
  className?: string,
  children: Node,
  style?: Object,
};

const Card = ({ title, titleVariant, className, children, style }: Props) => (
  <CardWrapper className={className} style={style}>
    {title && <CardTitle variant={titleVariant}>{title}</CardTitle>}
    <CardContent>{children}</CardContent>
  </CardWrapper>
);

Card.defaultProps = {
  title: '',
  titleVariant: 'h1',
  className: '',
  style: {},
};

export default Card;