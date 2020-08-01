/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import { Form } from '../categoria/styles';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

export const FormWrapper = styled.div`
  display: block;
  max-width: 1024px;
  width: 90%;
  margin: 0 auto;
  text-align:center;

  font-size: 1em;

  h1 {
    font-size: 1.6em;
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
  const { values, handleChange } = useForm({});

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <FormWrapper>
        <h1>Cadastro de Video</h1>

        <Form onSubmit={(event) => {
          event.preventDefault();

          console.log('categorias');
          console.log(categorias);
          console.log('values');
          console.log(values);

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          console.log('categoriaEscolhida');
          console.log(categoriaEscolhida);

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
    </PageDefault>
  );
}

export default CadastroVideo;
