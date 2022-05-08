/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/navbar.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import App from './views/app';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#toggle-bar'),
  drawer: document.querySelector('#menu-navbar'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
