import { NextResponse } from 'next/server';
import mailer from 'nodemailer';

const sendMail = async (props: { name: string; phone: string; }): Promise<any> => {
  const { name, phone } = props;
  const date = new Date().toLocaleString();

  const transporter = mailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'rojkov.yury.vl@yandex.ru', // должно дублироваться в mailOptions в from
      pass: 'ubuwcqxsubsbvofb'
    }
  });

  const mailOptions = {
    from: 'rojkov.yury.vl@yandex.ru',
    to: 'academy@bng-it.ru',
    subject: 'Заявка с сайта bng-school.netlify.app',
    text: `Заявка с сайта bng-school.netlify.app
      Имя: ${name};
      Телефон: ${phone};
      Время: ${date};
    `
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, info: unknown) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  try {
    const result = await sendMail({ name, phone });
    return NextResponse.json({ message: 'Email sent', result });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}