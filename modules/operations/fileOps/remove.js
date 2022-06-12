import { rm } from 'fs/promises'
import { cwd } from 'process'
import { resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const remove = async (path_to_file) => {
  try {
    const pathToFile = resolve(cwd(), path_to_file)
    await rm(pathToFile)
    informOfSuccess()

  } catch(err) {
    informOfOperationFailed()
  }
}