import puppeteer from 'puppeteer'
import { envVariables } from './constantes'

export const makePdf = async (fileName: string) => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    console.log('aca')
    await page.goto(`${envVariables.FRONT_URL}/cv`)
    await page.waitForSelector('header')
    await page.pdf({
      path: fileName,
      printBackground: true,
      width: '19cm',
      margin: { top: '1cm' },
    })
    await browser.close()
    console.log('done')
  } catch (error) {
    console.log(error)
  }
}
