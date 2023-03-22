import React from 'react';

import { Logo } from '@components/Logo';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Brand = styled.span`
  color: ${({ theme: { Typography } }) => Typography.colors.primary};
  font-weight: 700;
  margin-top: 5px;
  user-select: none;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Navbar = () => (
  <Container>
    <LogoContainer>
      <Logo />
      <Brand>wrkout.wiki</Brand>
    </LogoContainer>
  </Container>
);
