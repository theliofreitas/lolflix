import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  line-height: 1;
  display: inline-block;
  color: #cacaca;
  
  border-left: 3px solid;
  line-height: 1;

  font-size: 1.2em;
  font-weight: 700;
  margin: 0 0 .5em 0;
  padding: 7px 10px 7px 10px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

// export const VideoCardList = styled.ul`
//   margin: 0;
//   padding-left: 0;
//   padding-bottom: 32px;
//   list-style: none;
//   display: flex;
//   overflow-x: auto;
//   flex-direction: row;
  
//   li {
//     margin-right: 16px;
//   }
// `;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  padding-left: 60px;
  margin-bottom: 45px;

  @media (max-width: 800px) {
    padding-left: 5%;
  }
`;
