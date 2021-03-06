import React from 'react';
import styled from 'styled-components';
import { MdInfoOutline, MdWarning } from 'react-icons/md';
import { IoIosCheckmarkCircle } from 'react-icons/io';

import colors from 'theme/colors';

import NoteWrapper, { NoteType } from './NoteWrapper';

interface Props {
  /**
   * Title note
   */
  title: string;
  /**
   * Actual note that is displayed
   */
  text: string;
  /**
   * Note type
   */
  type: NoteType;
}

interface IconProps {
  color?: string;
}

const createIconStyles = ({ color }: IconProps) => ({
  width: '1.5rem',
  height: '1.5rem',
  color,
  'margin-right': '0.5rem',
});

const SuccessIcon = styled(IoIosCheckmarkCircle)`
  ${createIconStyles}
`;

const WarningIcon = styled(MdInfoOutline)`
  ${createIconStyles}
`;

const DangerIcon = styled(MdWarning)`
  ${createIconStyles}
`;

const NoteIcon = {
  informative: null,
  success: <SuccessIcon color={colors.skyBlue} />,
  warning: <WarningIcon color={colors.yellow} />,
  danger: <DangerIcon color={colors.red} />,
};

const getIconFromNoteType = (type: NoteType) => NoteIcon[type];

const Note = ({ type, title, text }: Props) => {
  const Icon = getIconFromNoteType(type);
  return (
    <NoteWrapper type={type}>
      {Icon} <strong>{title}</strong>
      {text}
    </NoteWrapper>
  );
};

export default Note;
