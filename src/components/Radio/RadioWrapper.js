import styled from 'styled-components';
import { uiColors } from 'utils';
import colors from 'config/colors';

const RadioWrapper = styled.div`
  display: inline-block;

  > input {
    opacity: 0;
  }

  > input + label {
    position: relative;
    padding-left: 1.5rem;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 1rem;
      height: 1rem;
      border: 1px solid ${colors.gray};
      background: ${colors.white};
      border-radius: 100%;
    }

    &::after {
      content: '●';
      position: absolute;
      top: -1px;
      left: 2.3px;
      font-size: 1.4rem;
      color: ${uiColors('primary.main')};
      transition: all 0.2s;
    }
  }

  > input:not(:checked) + label {
    &::after {
      opacity: 0;
      transform: scale(0);
    }
  }

  > input:checked + label {
    &::before {
      border: 1px solid ${uiColors('primary.main')};
    }

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  > input:disabled:not(:checked) + label {
    color: ${uiColors('text.disabled')};

    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }
  }

  > input:disabled:checked + label {
    color: ${uiColors('text.disabled')};

    &::before {
      border: 1px solid ${colors.gray};
      background: transparent;
    }

    &::after {
      color: ${colors.gray};
      background: transparent;
    }
  }

  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &::before {
      border: 1px solid ${colors.gray};
    }
  }
`;

/** @component */
export default RadioWrapper;
