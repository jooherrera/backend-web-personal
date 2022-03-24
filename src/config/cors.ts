import { Request } from 'express'
import { envVariables } from './constantes'

const allowedOrigins = [envVariables.ALLOWED_ORIGIN]

export const options = (req: Request, cb: any) => {
  let corsOptions = {}
  if (allowedOrigins.indexOf(req.header('Origin')!) !== -1) {
    corsOptions = { origin: true }
  } else {
    corsOptions = { origin: false }
  }
  cb(null, corsOptions)
}
