import { Request, Response } from 'express'
import StoreMongo from './Store.mongo'

class ControllerWebsite {
  getInfo = async (req: Request, res: Response) => {
    const data = await StoreMongo.fetchInfo()
    res.status(200).json(data)
  }

  addInfo = async (req: Request, res: Response) => {
    const info = {
      about: {
        content:
          'Soy un desarrollador que le encanta estudiar y poner en práctica sus conocimientos, resolviendo problemas con tecnologias como: NodeJs, React, MongoDB.',
      },
      resume: {
        content: {
          sectionHeader: {
            title: 'Jose Herrera',
            subTitle: 'Fullsta developer js',
            about:
              'Soy un desarrollador que le encanta estudiar y poner en práctica sus conocimientos, resolviendo problemas con tecnologias como: NodeJs, React, MongoDB.',
          },
          sectionContact: {
            phone: '011-27748848',
            mail: 'jooherrera4@gmail.com',
            city: 'Buenos Aires - Argentina',
            website: 'jooherrera.com',
          },
          sectionSoftSkills: {
            items: ['Capacidad resolutiva', 'Trabajo en equipo', 'Calidad', 'Autodidacta', 'Gestión del tiempo'],
          },
          sectionHardSkills: {
            items: ['Typescript', 'Javascript', 'NodeJS', 'ReactJS', 'MongoDB', 'Git'],
          },
          mainSection: {
            items: [
              {
                topic: 'Cursos',
                items: [
                  {
                    title: 'Backend developer',
                    description: 'Curso de programacón backend en CoderHouse.',
                  },
                  {
                    title: 'Javascript',
                    description: 'Curso de Javascript en CoderHouse.',
                  },
                  {
                    title: 'Frontend developer',
                    description: 'Curso de programacón ReactJS en CoderHouse.',
                  },
                  {
                    title: 'Desarrollo web',
                    description: 'Curso de desarrollo web estático en CoderHouse.',
                  },
                ],
              },
              {
                topic: 'Proyectos',
                items: [
                  {
                    title: 'To-Do App',
                    description: 'Aplicación creada con Typescript y Reactjs',
                  },
                  {
                    title: 'Personal Website',
                    description: 'Aplicación creada con Typescript y Reactjs',
                  },
                  {
                    title: 'E-commerce',
                    description: 'Aplicación creada con Typescript, Reactjs, Nodejs y MongoDB',
                  },
                ],
              },
              {
                topic: 'Educación',
                items: [
                  {
                    title: 'Tecnicatura Universitaria en Informática',
                    description: 'Actualmente en curso con fecha de fin diciembre 2024',
                  },
                  {
                    title: 'Técnico en informática personal y profesional',
                    description: 'Escuela de Educación Técnica N° 1 de Grand Bourg',
                  },
                ],
              },
            ],
          },
        },
      },
      works: {
        content: {
          items: [
            {
              title: 'To-Do App',
              link: 'https://to-do-app-khaki.vercel.app/',
              imgPortada: 'asd',
              imgLogos: ['sad', 'das'],
            },
            {
              title: 'Si-La-Bas',
              link: 'https://github.com/jooherrera/juegoSilabas',
              imgPortada: '321das',
              imgLogos: ['asddsa'],
            },
            {
              title: 'Website',
              link: 'https://to-do-app-khaki.vercel.app/',
              imgPortada: 'sdaasd',
              imgLogos: ['adsasd', 'adsasd'],
            },
          ],
        },
      },
    }

    await StoreMongo.addInfo(info)
    res.status(200).send('OK')
  }
}

export const Controller = new ControllerWebsite()
