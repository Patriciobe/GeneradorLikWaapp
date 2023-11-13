// whatsappLinkGenerator.js
export class WhatsAppLinkGenerator {
  constructor() {
    this.phone = null;
    this.message = null;
  }

  setPhone(value) {
    this.phone = value;
  }

  setMessage(value) {
    this.message = value;
  }

  generateLink() {
    if (this.phone && this.message) {
      const encodedPhone = encodeURIComponent(this.phone);
      const encodedMessage = encodeURIComponent(this.message);

      return `https://wa.me/${encodedPhone}?text=${encodedMessage}`;
    } else {
      return null;
    }
  }
}
