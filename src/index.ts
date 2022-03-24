import '@config/env'
import { envVariables } from '@config/constantes'
import express from 'express'
import { connectToDB, Logg } from 'back-tools'
import { exit } from 'process'
import { router } from './routes/routes'
import cors from 'cors'
import { options } from '@config/cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)

app.listen(envVariables.PORT, async () => {
  try {
    const isConnected = connectToDB(envVariables.MONGO_URI!)
    if (!isConnected) throw `No se pudo conectar a la base de datos.`
    Logg(`Server on - ${envVariables.PORT} - ${envVariables.ENVIRONMENT}`).log()
  } catch (error: any) {
    Logg(`Error al iniciar el servidor - ${error.message}`).file()
    exit(1)
  }
})
