/* eslint-disable react/jsx-no-bind */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import PageDefault, { Grid } from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Form, FormWrapper, CategoriesList, CategoriesListItem } from './styles';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  // const useFormObj = useForm(valoresIniciais);
  // const values = useFormObj.values;
  // const handleChange = useFormObj.handleChange;
  // Destructuring...
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
        setCategorias(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>

      <Grid cols="2">

        <FormWrapper>
          <h1>Cadastro de Categoria</h1>
          <p>{values.titulo}</p>

          <Form onSubmit={function handleSubmit(e) {
            e.preventDefault();
            setCategorias([
              ...categorias,
              values,
            ]);

            clearForm(valoresIniciais);
          }}
          >
            <FormField
              label="Título da Categoria"
              type="text"
              name="titulo"
              value={values.titulo}
              onChange={handleChange}
            />

            <FormField
              label="Descrição"
              type="text"
              as="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />

            <FormField
              label="Cor"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />

            <Button>
              Cadastrar
            </Button>
          </Form>
        </FormWrapper>

        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}

        <CategoriesList>
          {categorias.map((categoria) => (
            <CategoriesListItem color={`${categoria.cor}`} key={`${categoria.titulo}`}>
              {categoria.titulo}
            </CategoriesListItem>
          ))}
        </CategoriesList>

      </Grid>

    </PageDefault>
  );
}

export default CadastroCategoria;
