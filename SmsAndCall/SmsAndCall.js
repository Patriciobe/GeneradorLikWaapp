// SmsAndCall.js
export class SmsAndCall {
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

  generateSmsLink() {
    if (this.phone && this.message) {
      const encodedPhone = encodeURIComponent(this.phone);
      const encodedMessage = encodeURIComponent(this.message);
      return `sms:${encodedPhone}?body=${encodedMessage}`;
    } else {
      return null;
    }
  }

  generateCallLink() {
    if (this.phone) {
      const encodedPhone = encodeURIComponent(this.phone);
      return `tel:${encodedPhone}`;
    } else {
      return null;
    }
  }
}
