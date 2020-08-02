import styled from 'styled-components';
import youtubeRepository from '../../repositories/youtubeResults';

function getYoutubeVideos(searchString) {
  return youtubeRepository.searchYoutubeVideos(searchString)
    .then((data) => {
      if (data) {
        const resultados = data.items.map((item) => {
          return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            image: item.snippet.thumbnails.high.url,
            url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          };
        });
        return resultados;
      }
    });
}

export const YoutubeSearchContainer = styled.div`
  
  h1 {
    font-size: 16px;
  }
`;

export const YoutubeSearchForm = styled.form`
  input {
    padding: 10px;
    font-size: 13px;
    outline: 0;
    border: 0;
    border-radius: 4px 0px 0px 4px;
    float: left;
    width: 80%;
    background: #53585D;
    color: #F5F5F5;
  }

  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const YoutubeSearchButton = styled.button`
  float: left;
  width: 50px;
  padding: 10px;
  background: #f14c40;
  color: white;
  font-size: 13px;
  outline: 0;
  border: 0;
  cursor: pointer;
  transition: opacity .3s;
  border-radius: 0px 4px 4px 0px;

  &:hover{
    opacity: .5;
  }
`;

export const YoutubeResults = styled.ul`
  padding: 10px 0px 10px 0px;

  li {
    background: #252525;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 15px;
    display: flex;
    transition: all .3s;
    cursor: pointer;
    
    &:hover {
      background: #313131;
    };
    &:active {
      background: blue;
    }

    span {
      padding: 0px 15px 15px 15px;
      font-size: 0.9em;
    }
    img {
      width: 150px;
      height: 90px;
    }
  }
`;

export default getYoutubeVideos;
