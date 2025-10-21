"use strict";
require("dotenv").config();
const { render } = require("velocityjs");
const fs = require("fs");
const { sendMail } = require("./mailtrap.js");

const template = fs.readFileSync("./templates/emailNewSignUp.vm", "utf-8");
const data = {
  map: {
    firstName: "Tay",
    leadFormUrl: "https://google.com",
    urlUnsubscribe: "https://google.com",
  },
};

const html = render(template, data);

sendMail(html);
