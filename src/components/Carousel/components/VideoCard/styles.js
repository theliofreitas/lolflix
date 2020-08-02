import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const VideoCardContainer = styled.a`
  padding: 28.125% 0 !important;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;

  transition: all 0.5s ease;
  /* transition-delay: 0s;  */

  width: 293px;
  height: 165px;
  @media (max-width: 1376px) {
    width: 246px;
    height: 139px;
  }

  @media (min-width: 800px) {
    &:hover,
    &:focus {
      opacity: .5;
      margin: 0px 15px 0px 15px;
      /* transition-delay: 0.1s; */
    }
  }

  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
