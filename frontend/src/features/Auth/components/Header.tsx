import * as React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  margin-top: 2rem;
  font-size: 3.6rem;
  text-transform: uppercase;
  text-align: center;
`;

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <React.Fragment>
      <StyledTitle>{title}</StyledTitle>
    </React.Fragment>
  );
};
