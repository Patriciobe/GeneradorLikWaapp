// generaremail.js
import { EmailGenerator } from './Emailgenerator.js';

window.onload = inicio;

function inicio() {
  const generator = new EmailGenerator();
  const resultContainer = document.getElementById('result');

  document.getElementById("generateEmailBtn").addEventListener("click", () => {
    generator.setToAddress(document.getElementById("to-address").value);
    generator.setSubject(document.getElementById("subject").value);
    generator.setBody(document.getElementById("body").value);

    const emailLink = generator.generateEmail();

    if (emailLink) {
      displayResult(resultContainer, emailLink);
    }
  });
}

function displayResult(container, link) {
  const newLink = document.createElement('div');
  newLink.innerHTML = `<p>Enlace de Correo Electrónico:</p><a href="${link}" target="_blank">${link}</a>`;
  container.appendChild(newLink);
}
