import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    border: 1,
    iconSize: 16,
    height: 24,
  },
  large: {
    fontSize: 18,
    border: 2,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper style={{ '--border': styles.border + 'px' }}>
      <Icon id={icon} size={styles.iconSize} />
      <TextInput
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--fontSize': styles.fontSize / 16 + 'rem',
          '--border': styles.border + 'px',
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const TextInput = styled.input`
  font-family: 'Roboto', sans-serif;
  background-color: inherit;
  color: ${COLORS.gray700};
  width: var(--width);
  height: var(--height);
  font-size: var(--fontSize);
  font-weight: 700;
  border: none;
  outline: none;
  /* border-bottom: var(--border) solid black; */

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  border-bottom: var(--border) solid black;

  &:hover + ${TextInput} {
    color: deeppink;
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export default IconInput;
