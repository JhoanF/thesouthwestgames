// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';
import { RegistrationType } from '../constants';


type ResponseData = {
  message?: string
  error?: string
}

type ContactRequest = {
  name: string
  email: string
  message: string
  not_a_bot: boolean
  type: RegistrationType
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message, not_a_bot, type } = req.body as ContactRequest

  if (!not_a_bot) {
    res.status(403).json({ message: 'You are a bot' })
  }

  if (!name || !email || !message) {
    res.status(422).json({ message: 'Invalid input' })
  }

  const newMessage = {
    email,
    message,
    name,
    type
  }


  try {
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY as string;

    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: 'coachmani2014@gmail.com',
      from: 'jhoan.o.falcongonzalez@gmail.com',
      cc: ['jhoan.o.falcongonzalez@gmail.com'],
      subject: 'The South West Games - Contact Form Submission - ' + type,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };


    await sgMail.send(msg);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}
