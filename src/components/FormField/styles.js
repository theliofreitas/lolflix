import styled from 'styled-components';

export const InputField = styled.input`
    height: 30px;
    display: block;
    width: 100%;
    margin: 10px 0 20px 0;
    background-color: #eee;
    border-radius: 5px;
    border: 1px solid #ddd;

    &[type='color'] {
        width:50px;
        height: 40px;
        border: 1px;
    }
`;

export const TextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    display: block;
    margin: 10px 0 20px 0;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

export const Label = styled.label`
    font-size: 13px;
    display: inline-block;
`;