import { Checkbox } from 'components/Checkbox';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import colors from 'theme/colors';
import { fontSizes, fontWeights } from 'utils';
import { Button } from 'elements/Button';
import { Grid } from 'blocks';

const TableWithHeaderSectionContainer = styled(Grid.Container)`
  padding: 1rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 2px;
`;

const TableWrapper = styled.table`
  font-family: Roboto, sans-serif;
  background: ${colors.white};
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.light};
  box-sizing: border-box;
  border: ${ifProp('hasHeaderSection', '0', `1px solid ${colors.gray}`)};
  border-radius: 3px;
  position: relative;
  font-weight: ${fontWeights('light')};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border-collapse: collapse;
  table-layout: auto;

  @media (max-width: 960px) {
    table-layout: fixed;
  }
`;

const TableHeadRow = styled.tr`
  border-bottom: 1px solid ${colors.gray};
  width: 100%;
`;

const TableRow = styled.tr<{ noBottomBorder?: boolean }>`
  border-bottom: 1px solid ${colors.lightGray};
  width: 100%;
  ${({ noBottomBorder }) =>
    noBottomBorder &&
    css`
      &:last-child {
        border-bottom: none;
      }
    `}
`;

const ButtonTableRow = styled(TableRow)`
  background: ${colors.lightGray};
  width: 100%;
  border-bottom: 1px solid ${colors.gray};
  border-top: 1px solid ${colors.gray};
`;

const TableCell = styled.td<{ isActionsCel?: string }>`
  font-size: ${fontSizes('medium')};
  padding: 0.4375rem 1%;
  vertical-align: middle;
  line-height: 30px;
  text-align: ${ifProp('isActionsCell', 'right', 'left')};
  font-weight: ${fontWeights('light')};
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  a {
    color: ${colors.fontGray};

    &:hover {
      color: ${colors.fontDarkGray};
    }
  }
`;

const TableHeaderCell = styled.th<{ alignRight?: string }>`
  padding: 1rem 1%;
  font-weight: ${fontWeights('light')};
  font-size: ${fontSizes('small')};
  text-align: ${({ alignRight }) => (alignRight ? 'right' : 'left')};
  white-space: normal;
`;

const LoaderContainer = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableCheckbox = styled(Checkbox)`
  label {
    top: -10px;
  }
`;

const TableButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${colors.fontGray};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export {
  TableWithHeaderSectionContainer,
  TableWrapper,
  TableHeadRow,
  ButtonTableRow,
  TableCell,
  TableHeaderCell,
  LoaderContainer,
  TableCheckbox,
  TableButton,
};
