import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const CenteredLayout: React.FC = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);
