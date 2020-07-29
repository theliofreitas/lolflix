import React from 'react';
import PagesDefault from '../../components/PageDefault'
import { Title, AnimatedSubtitle } from './styles';

function PaginaNotFound() {
    return (
        <>
            <PagesDefault>
                <Title>404</Title>
                <AnimatedSubtitle>Page not found</AnimatedSubtitle>
            </PagesDefault>
        </>
    );
}

export default PaginaNotFound;