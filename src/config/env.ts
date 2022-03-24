import { initializeEnvironment, isEmptyEnvVariable, Logg } from 'back-tools'
import { exit } from 'process'
initializeEnvironment()

import { envVariables, Msg } from './constantes'
;(async () => {
  if (isEmptyEnvVariable(envVariables)) {
    Logg(Msg.emptyEnv).file()
    exit(1)
  } else {
    Logg(Msg.noEmptyEnv).debug()
  }
})()
