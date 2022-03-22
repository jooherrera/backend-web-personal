export const Msg = {
  emptyEnv: 'Faltan variables de entorno. Proceso terminado.',
  noEmptyEnv: 'Variables de entorno aceptadas.',
}

export const envVariables = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  PORT: process.env.PORT,
  DATABASE: process.env.DATABASE,
  MONGO_URI: process.env.MONGO_URI,
}
