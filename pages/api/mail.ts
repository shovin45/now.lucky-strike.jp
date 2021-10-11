import { createTransport } from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

const Mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })
  await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: 'お問い合わせ',
    text: req.body,
  })

  res.status(200).json({
    success: true,
  })
}

export default Mail
