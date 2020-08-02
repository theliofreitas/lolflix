/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault, { Grid } from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Form } from '../categoria/styles';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

// YoutubeSearch Imports
import getYoutubeVideos, {
  YoutubeSearchContainer,
  YoutubeSearchForm,
  YoutubeSearchButton,
  YoutubeResults,
} from '../../../components/YoutubeSearch';

export const FormWrapper = styled.div`
  display: block;
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  text-align:center;
  font-size: 1em;

  h1 {
    font-size: 16px;
  }
  
  a {
    margin-top: 15px;
    display: block;
  }
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange, setNewValues } = useForm({});
  // YoutubeSearch
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const [erroYoutubeAPI, setErroYoutubeAPI] = useState(false);

  const refFormWrapper = useRef(null);

  function scrollTo(ref) {
    // Scroll only in mobile devices
    if (window.innerWidth <= 800) {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <Grid cols="2">

        <YoutubeSearchContainer>
          <h1>Busque no Youtube e clique no vídeo</h1>

          <YoutubeSearchForm onSubmit={(event) => {
            event.preventDefault();

            getYoutubeVideos(values.searchTerm)
              .then((resultados) => {
                if (resultados) {
                  setResultadosPesquisa(resultados);
                  setErroYoutubeAPI(false);
                } else {
                  // eslint-disable-next-line no-console
                  console.log('Não foi possível retornar os dados do Youtube');
                  setErroYoutubeAPI(true);
                }
              });
          }}
          >
            <input
              label="Termo de pesquisa"
              type="text"
              name="searchTerm"
              value={values.searchTerm}
              onChange={handleChange}
            />

            <YoutubeSearchButton type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </YoutubeSearchButton>
          </YoutubeSearchForm>

          <YoutubeResults>
            {resultadosPesquisa.map((resultado) => (
              <li
                key={resultado.videoId}
                onClick={(() => {
                  setNewValues({
                    titulo: resultado.title,
                    url: resultado.url,
                  });
                  scrollTo(refFormWrapper);
                })}
              >
                <img
                  src={resultado.image}
                  alt="Youtube Thumbnail"
                />
                <span>{resultado.title}</span>
              </li>
            ))}

            {erroYoutubeAPI && (
              <h1 style={{ color: '#f14c40' }}>
                Não foi possível recuperar os dados da API do Youtube
                &nbsp;
                <span aria-labelledby=":(" role="img">😔</span>
              </h1>
            )}
          </YoutubeResults>
        </YoutubeSearchContainer>

        <FormWrapper ref={refFormWrapper}>
          <h1>Cadastro de Video</h1>

          <Form onSubmit={(event) => {
            event.preventDefault();

            const categoriaEscolhida = categorias.find((categoria) => {
              return categoria.titulo === values.categoria;
            });

            videosRepository.create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            }).then(() => {
              history.push('/');
            });
          }}
          >

            <FormField
              label="Título do Vídeo"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="URL do vídeo"
              type="text"
              name="url"
              value={values.url}
              onChange={handleChange}
            />

            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              suggestions={categoryTitles}
            />

            <Button type="submit">
              Cadastrar
            </Button>
          </Form>

          <Link to="/cadastro/categoria">
            Cadastrar Categoria
          </Link>
        </FormWrapper>

      </Grid>
    </PageDefault>
  );
}

export default CadastroVideo;
