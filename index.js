import "dotenv/config";
import { render } from "velocityjs";
import { readFileSync } from "fs";
import mailtrapServices from "./mailtrap.js";

const template = readFileSync("./templates/emailNewSignUp.vm", "utf-8");
const data = {
  map: {
    firstName: "Tay",
    leadFormUrl: "https://google.com",
    urlUnsubscribe: "https://google.com",
  },
};

const html = render(template, data);

mailtrapServices.sendMail({ html });
