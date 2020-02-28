// @flow
import React from 'react';
import colors from 'config/colors';

// Images
import previewImg from 'assets/images/ip-preview-premium.png';

// Types
import { type Branding } from '../types/branding';

// Components
import TextEditor from '../components/TextEditor';
import {
  StyledPreviewBox,
  ImageWrapper,
  ItemDetails,
  FootService,
  ButtonWrapper,
  Button,
  PreviewFooter,
  FooterLink,
  IconHolder,
  Icon,
} from './styled';

type Props = {
  branding?: Branding,
  width?: string,
  height?: string,
  minHeight?: string,
  minWidth?: string,
  handleOpenModal: (e: any) => any,
};

const Preview6 = ({
  branding: {
    paywall_cover_photo: coverPhoto = previewImg,
    preview_title: title = '<h1><strong>Title</strong></h1>',
    preview_description: description = '<p>Description</p>',
    preview_button_label: buttonLabel = 'Buy',
    preview_buttons_bg_color: buttonBgColor = colors.green,
    preview_buttons_text_color: buttonTextColor = colors.white,
  } = {},
  width,
  height,
  minWidth,
  minHeight,
  handleOpenModal,
}: Props) => (
  <StyledPreviewBox minWidth={minWidth} minHeight={minHeight} width={width} height={height}>
    <ImageWrapper backgroundImage={coverPhoto} />
    <ItemDetails>
      <TextEditor value={title} displayToolbar={false} readOnly />
      <TextEditor value={description} displayToolbar={false} readOnly />
      <FootService>
        <ButtonWrapper>
          <Button
            buttonBgColor={buttonBgColor}
            buttonTextColor={buttonTextColor}
            onClick={handleOpenModal}
          >
            <p>{buttonLabel}</p>
          </Button>
        </ButtonWrapper>
        <PreviewFooter>
          <FooterLink>Already have access? Login with your InPlayer account</FooterLink>
          <IconHolder>
            <Icon name="lock" />
          </IconHolder>
        </PreviewFooter>
      </FootService>
    </ItemDetails>
  </StyledPreviewBox>
);

Preview6.defaultProps = {
  branding: {},
  minWidth: undefined,
  minHeight: undefined,
  height: undefined,
  width: undefined,
};

export default Preview6;
