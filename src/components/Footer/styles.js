/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 70px;
  padding-bottom: 10px;
  color: var(--gray);
  font-size: 11px;
  text-align: center;

  img{
    width: 40px;
  }

  a{
    text-decoration:none;
  }

  .fa{
    font-size: 30px;
    padding: 20px;
  }
  .fa:hover {
    opacity: 0.7;
  }

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
