import { Controller } from '@components/Controller'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Home API')
})
router.get('/data', Controller.getInfo)

// router.get('/adddata', Controller.addInfo)

export { router }
