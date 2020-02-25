import * as React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  width: 26rem;
`;

export const Layout: React.FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
