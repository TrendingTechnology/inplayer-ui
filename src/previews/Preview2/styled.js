// @flow
import styled from 'styled-components';
import { transparentize } from 'polished';
import colors from 'config/colors';
import { fontSizes } from 'utils';
import { MdStar } from 'react-icons/md';

// Components
import {
  PreviewBox,
  ImageHolder,
  PreviewFooter,
  DescriptionSpan,
} from '../components/SharedComponents';

export const StyledPreviewBox = styled(PreviewBox)`
  font-size: ${fontSizes('large')};
  height: ${({ height }) => height ?? 'auto'};
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 8px 8px 3px 3px;
`;

export const StyledImageHolder = styled(ImageHolder)`
  width: 50%;
  padding-bottom: 60%;
  margin: 0;
  display: inline-block;
  background-image: url(${({ backgroundImage }) => backgroundImage});

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const AssetDetails = styled.div`
  display: inline-block;
  vertical-align: bottom;
  width: 49%;
  padding: 0 2.5%;
  box-sizing: border-box;
  max-width: 600px;
  margin: 6px auto;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const StyledIcon = styled(MdStar)`
  line-height: 15px;
  font-size: ${fontSizes('large')};
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  margin: 0 0.4em 0 0;
  position: relative;
`;

export const PaywallDescriptionSpan = styled(DescriptionSpan)`
  padding-bottom: 20px;
`;

export const Footer = styled(PreviewFooter)`
  border-top: 1px solid ${transparentize(0.9, colors.black)};
  margin-top: 1.6em;
  text-align: left;
  padding-top: 0.5em;
`;

export const BuyButtonWrapper = styled.div`
  text-align: left;
  width: 80%;

  @media screen and (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
`;
