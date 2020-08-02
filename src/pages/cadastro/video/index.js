/* eslint-disable prefer-arrow-callback */
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
  // YoutubeSearch
  const [resultadosPesquisa, setResultadosPesquisa] = useState([]);
  const [erroYoutubeAPI, setErroYoutubeAPI] = useState(false);
  // Scroll functionality
  const refFormWrapper = useRef(null);

  function scrollTo(ref) {
    // Scroll only in mobile devices
    if (window.innerWidth <= 800) {
      window.scrollTo(0, ref.current.offsetTop);
    }
  }

  const { values, handleChange, setNewValues, errors, validateValues, touched, setTouched, handleBlur } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  },
  function (values) {
    const errors = {};

    if (values.titulo.length < 3) {
      errors.titulo = 'Insira um título válido';
    }

    if (!values.url.includes('youtube.com/watch?v=')) {
      errors.url = 'Insira uma URL do Youtube válida';
    }

    if (!categoryTitles.find((element) => element === values.categoria)) {
      errors.categoria = 'Selecione uma categoria válida';
    }

    return errors;
  });

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

            setTouched({
              titulo: true,
              url: true,
              categoria: true,
            });

            validateValues(values);

            if (Object.keys(errors).length <= 0) {
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
            } else {
              console.log('Existem erros no formulário');
            }
          }}
          >

            <FormField
              label="Título do Vídeo"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
              onBlur={handleBlur}
              spanError={touched.titulo && errors.titulo && <span className="form-field-error">{errors.titulo}</span>}
            />

            <FormField
              label="URL do vídeo"
              type="text"
              name="url"
              value={values.url}
              onChange={handleChange}
              onBlur={handleBlur}
              spanError={touched.url && errors.url && <span className="form-field-error">{errors.url}</span>}
            />

            <FormField
              label="Categoria"
              type="text"
              name="categoria"
              value={values.categoria}
              onChange={handleChange}
              onBlur={handleBlur}
              spanError={touched.categoria && errors.categoria && <span className="form-field-error">{errors.categoria}</span>}
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
