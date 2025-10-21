import { MailtrapClient } from "mailtrap";

const TOKEN = process.env.MAILTRAP_TOKEN;

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "ngudai999@gmail.com",
  },
];

export function sendMail(template) {
  client
    .send({
      from: sender,
      to: recipients,
      subject: "You are awesome!",
      html: template,
      category: "Wex",
    })
    .then(console.log, console.error)
    .catch(console.error);
}
