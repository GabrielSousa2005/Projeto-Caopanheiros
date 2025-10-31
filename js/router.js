
import { inicioTemplate, projetosTemplate, cadastroTemplate } from './templates.js';
import { initValidation } from './validation.js';

const contentContainer = document.getElementById('app-content');

const routes = {
  '#inicio': inicioTemplate,
  '#projetos': projetosTemplate,
  '#cadastro': cadastroTemplate
};

function handleRouteChange() {
  const hash = window.location.hash || '#inicio';
  
  const templateFunction = routes[hash];
  
  if (templateFunction) {

    contentContainer.innerHTML = templateFunction();
    
    if (hash === '#cadastro') {
      initValidation();
    }
  } else {
    contentContainer.innerHTML = '<div class="container"><h2 style="grid-column: 1 / -1;">Erro 404: Página não encontrada</h2></div>';
  }
  
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  const activeLink = document.querySelector(`nav a[href="${hash}"]`);
  
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

export function initRouter() {
  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('load', handleRouteChange);
}