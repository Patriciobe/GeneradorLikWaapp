// generador.js
import { WhatsAppLinkGenerator } from './WhatsAppLinkGenerator.js';

window.onload = inicio;

function inicio() {
  const generator = new WhatsAppLinkGenerator();
  const resultContainer = document.getElementById('result');

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    generator.setPhone(document.querySelector(".phone").value);
    generator.setMessage(document.querySelector(".message").value);

    const url = generator.generateLink();

    if (url) {
      displayResult(resultContainer, url);
    }
  });
}

function displayResult(container, link) {
  const newLink = document.createElement('div');
  newLink.innerHTML = `<p>Enlace de WhatsApp:</p><a href="${link}" target="_blank">${link}</a>`;
  container.appendChild(newLink);
}
