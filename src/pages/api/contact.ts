// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';
import { RegistrationType } from '@/components/earlyRegistration';


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
  isJudge: boolean
  tshirt: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message, not_a_bot, type, isJudge, tshirt } = req.body as ContactRequest

  if (!not_a_bot) {
    res.status(403).json({ message: 'You are a bot' })
  }

  if (!name || !email || !message) {
    res.status(422).json({ message: 'Invalid input' })
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
        ${type == RegistrationType.VOLUNTEER &&
        `IsJudge: ${isJudge}` + '\n' + `Tshirt: ${tshirt}`
        }
      `,
    };


    await sgMail.send(msg);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}
