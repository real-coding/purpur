import styled from 'styled-components';
import { theme } from 'styled-tools';

export const StyledInput = styled.input`
  height: ${theme('formElementsHeight')};
  border: 0.2rem solid ${theme('colors.border')};
  border-radius: ${theme('borderRadius')};
`;
