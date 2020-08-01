import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          <b>Imersão React da Alura</b>
        </a>
      </p>
      <a href="https://www.linkedin.com/in/theliomarques/" class="fa fa-linkedin" target="_blank"></a>
      <a href="https://github.com/theliofreitas/lolflix" class="fa fa-github" target="_blank"></a>
      <a href="https://twitter.com/theliofreitas" class="fa fa-twitter" target="_blank"></a>
    </FooterBase>
  );
}

export default Footer;
