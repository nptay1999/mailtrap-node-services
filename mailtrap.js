import { MailtrapClient } from "mailtrap";

class MailtrapServices {
  static instance = null;

  constructor() {
    if (MailtrapServices.instance) {
      return MailtrapServices.instance;
    }

    this.client = new MailtrapClient({
      token: process.env.MAILTRAP_TOKEN,
    });

    this.defaultSender = {
      email: "hello@demomailtrap.com",
      name: "Mailtrap Test",
    };

    this.defaultRecipients = [
      {
        email: "ngudai999@gmail.com",
      },
    ];

    MailtrapServices.instance = this;
  }

  async sendMail({
    html,
    subject = "You are awesome!",
    category = "Wex",
    sender = this.defaultSender,
    recipients = this.defaultRecipients,
  }) {
    try {
      const result = await this.client.send({
        from: sender,
        to: recipients,
        subject,
        html,
        category,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

// Export a single instance
const mailtrapServices = new MailtrapServices();
export default mailtrapServices;
