import infoModel from './info.model'

class StoreMongo {
  async fetchInfo() {
    return await infoModel.findOne()
  }

  async addInfo(info: any) {
    return await new infoModel(info).save()
  }
}

export default new StoreMongo()
