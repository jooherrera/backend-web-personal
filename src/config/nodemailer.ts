import { Logg } from 'back-tools'
import { createTransport } from 'nodemailer'
import { envVariables } from './constantes'

const Admintransporter = createTransport({
  host: envVariables.HOSTMAILER,
  port: Number(envVariables.PORTMAILER),
  secure: true,
  auth: {
    user: envVariables.USERMAILER,
    pass: envVariables.PASSMAILER,
  },
})

export const sendAdminMail = async (mailOptions: any) => {
  try {
    const resp = await Admintransporter.sendMail(mailOptions)
  } catch (error) {
    Logg('Problemas al enviar el mail').file()
  }
}

export const mailOptionsToAdmin = (fromMail: string, fromName: string, message: string) => ({
  from: 'Website',
  to: envVariables.ADMIN_MAIL,
  subject: 'Enviado desde la web',
  html: `
      <h1>Nuevo mensaje.</h1>
      <h3>${fromName}</h3>
      <h4>${fromMail}</h4>
      <p>${message} </p>
      
    `,
})

export const mailOptionsToUser = (fromMail: string, fromName: string) => ({
  from: 'Jose Herrera',
  to: fromMail,
  subject: 'Jose Herrera',
  html: `
    <h3>Estimado/a ${fromName}</h3>
    <p>Muchas gracias por ponerse en contacto. A la brevedad me estaré comunicando\t
    con usted.</p>
    <p>Saludos Cordiales.</p>
    <p><strong>José Herrera.</strong></p>
    `,
})
