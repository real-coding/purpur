import styled from 'styled-components';
import { theme } from 'styled-tools';

/**
 * TODO move #bababa to theme
 */

export const StyledInput = styled.input`
  height: ${theme('formElementsHeight')};
  border: 0.2rem solid #bababa;
  border-radius: ${theme('borderRadius')};
`;
