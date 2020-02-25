import * as React from 'react';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import i18n from 'common/i18n';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 4rem;
  height: 4rem;
  flex: 0 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-transform: uppercase;
  border: 0.1rem solid ${theme('colors.border')};
  border-radius: 50%;
`;

const Line = styled.div`
  height: 0.1rem;
  width: 100%;
  background: ${theme('colors.border')};
`;

export const Separator: React.FC = () => {
  return (
    <Wrapper>
      <Line />
      <Circle>{i18n.t('features.Auth.or')}</Circle>
      <Line />
    </Wrapper>
  );
};
