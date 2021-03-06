import colors from 'theme/colors';
import { ModifierProps } from './types';

export const borderPrimary = ({ theme }: ModifierProps) => `
  border: 1px solid ${theme.palette.primary.main};
`;

export const borderInfo = () => `
  background: ${colors.skyBlue};
`;

export const borderWarning = () => `
   border: 1px solid ${colors.red};
`;

export const borderSuccess = () => `
  border: 1px solid ${colors.green};
`;

export const borderDanger = () => `
  border: 1px solid ${colors.red};
`;
