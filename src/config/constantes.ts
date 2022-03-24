export const Msg = {
  emptyEnv: 'Faltan variables de entorno. Proceso terminado.',
  noEmptyEnv: 'Variables de entorno aceptadas.',
}

export const envVariables = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  MONGO_URI: process.env.MONGO_URI,
  HOSTMAILER: process.env.HOSTMAILER,
  PORTMAILER: process.env.PORTMAILER,
  USERMAILER: process.env.USERMAILER,
  PASSMAILER: process.env.PASSMAILER,
  ADMIN_MAIL: process.env.ADMIN_MAIL,
  FRONT_URL: process.env.FRONT_URL,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
}
