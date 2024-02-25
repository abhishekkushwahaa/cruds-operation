import nodemailer from "nodemailer";
import Env from "./env";

const email = Env.SMTP_FROM;
const pass = Env.SMTP_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
