import infoModel from './info.model'

class StoreMongo {
  async fetchInfo() {
    return await infoModel.findOne()
  }

  async addInfo(info: any) {
    const newInfo = new infoModel(info)

    return await newInfo.save()
  }
}

export default new StoreMongo()
