import { createTransport } from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

const Mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const {text,email} = JSON.parse(req.body)
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
    text,
  })

  await transporter.sendMail({
    from: 'Lucky Strike<the-2nd-sun@lucky-strike.jp>',
    to: email,
    subject: 'Lucky Strike ワンマンライブに関するお問い合わせを受け付けました。',
    text,
  })

  res.status(200).json({
    success: true,
  })
}

export default Mail
