import { Request } from 'express'
import cors from 'cors'
import { envVariables } from './constantes'

const allowedOrigin = envVariables.ALLOWED_ORIGIN

export const options: cors.CorsOptions = {
  origin: allowedOrigin,
}
