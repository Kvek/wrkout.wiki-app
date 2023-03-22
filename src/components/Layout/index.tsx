import { Loader } from '@components/Loader';
import { Navbar } from '@components/Navbar';

import { ChildrenInterface } from 'shared/types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1rem;
`;

export const Layout = ({ children }: ChildrenInterface) => (
  <>
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>

    <Loader />
  </>
);
