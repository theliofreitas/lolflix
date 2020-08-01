import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

export const Grid = styled.div.attrs()`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 1}, 1fr);
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function PageDefault(props) {
  return (
    <>
      <Menu />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
