import styled from 'styled-components';

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

export const Form = styled.form`
    display: inline-flex;
    flex-direction: column;
    background: #1b1b1b;
    padding: 20px 50px 30px 40px;

    Button {
        background-color: var(--primary);
    }
`;

export const CategoriesList = styled.ul`
    
`;

export const CategoriesListItem = styled.li`
    display: block;
    border-left: 3px ${(props) => props.color} solid;
    margin: 20px;
    padding: 0 10px 0 10px; 
`;
