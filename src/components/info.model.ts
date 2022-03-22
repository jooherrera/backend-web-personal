import { model, Schema } from 'mongoose'
import { type } from 'os'

const WorkItemsSchema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
    imgPortada: { type: String, required: true },
    imgLogos: [{ type: String }],
  },
  { _id: false }
)

const ResumeHeader = new Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String, required: true },
    about: { type: String, required: true },
  },
  { _id: false }
)

const ResumeContact = new Schema(
  {
    phone: { type: String, required: true },
    mail: { type: String, required: true },
    city: { type: String, required: true },
    website: { type: String, required: true },
  },
  { _id: false }
)

const ResumeMainSubItems = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { _id: false }
)
const ResumeMainItems = new Schema(
  {
    topic: { type: String, required: true },
    items: [ResumeMainSubItems],
  },
  { _id: false }
)

// ---------------------------------------------------

const InfoSchema = new Schema({
  about: {
    content: { type: String, required: true },
  },
  resume: {
    content: {
      sectionHeader: ResumeHeader,
      sectionContact: ResumeContact,
      sectionSoftSkills: {
        items: [{ type: String }],
      },
      sectionHardSkills: {
        items: [{ type: String }],
      },
      mainSection: {
        items: [ResumeMainItems],
      },
    },
  },
  works: {
    content: {
      items: [WorkItemsSchema],
    },
  },
})

export default model('infos', InfoSchema)
