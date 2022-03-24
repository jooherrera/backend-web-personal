import { Controller } from '@components/Controller'
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Home API')
})
router.get('/data', Controller.getInfo)

router.post('/sendmail', Controller.sendMail)

router.get('/download', Controller.downloadCV)

// router.get('/seed', Controller.addInfo)

export { router }
