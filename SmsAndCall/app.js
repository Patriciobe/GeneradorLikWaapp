// app.js
import { SmsAndCall } from './SmsAndCall.js';

window.onload = inicio;

function inicio() {
  const generator = new SmsAndCall();
  const resultContainer = document.getElementById('result');

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    generator.setPhone(document.querySelector(".phone").value);
    generator.setMessage(document.querySelector(".message").value);

    const smsLink = generator.generateSmsLink();
    const callLink = generator.generateCallLink();

    if (smsLink) {
      displayResult(resultContainer, "Enlace de SMS:", smsLink);
    }

    if (callLink) {
      displayResult(resultContainer, "Enlace de llamada:", callLink);
    }
  });
}

function displayResult(container, label, link) {
  const newLink = document.createElement('div');
  newLink.innerHTML = `<p>${label}</p><a href="${link}" target="_blank">${link}</a>`;
  container.appendChild(newLink);
}
