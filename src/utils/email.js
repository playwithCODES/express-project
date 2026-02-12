import config  from "../config/config.js";
const resend = new Resend(config.emailApiKey);
import { Resend } from "resend";

const sendEmail = async (recipient, { subject,html }) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [recipient],
    subject,
    html,
  });
};

export default sendEmail;