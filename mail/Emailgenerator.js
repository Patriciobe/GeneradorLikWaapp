// emailGenerator.js
export class EmailGenerator {
  constructor() {
    this.toAddress = null;
    this.subject = null;
    this.body = null;
  }

  setToAddress(value) {
    this.toAddress = value;
  }

  setSubject(value) {
    this.subject = value;
  }

  setBody(value) {
    this.body = value;
  }

  generateEmail() {
    if (this.toAddress && this.subject && this.body) {
      const emailLink = `mailto:${this.toAddress}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
      return emailLink;
    } else {
      return null;
    }
  }
}
