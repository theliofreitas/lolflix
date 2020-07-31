import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
import PaginaNotFound from './pages/PageNotFound';


ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={PaginaNotFound}/>
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  document.getElementById('root')
);
