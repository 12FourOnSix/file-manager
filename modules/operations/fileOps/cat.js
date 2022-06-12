import { existsSync, createReadStream } from 'fs'
import { stdout } from 'process'
import { informOfOperationFailed } from '../../accessory/talkToUser.js'

export const cat = async (pathToFile) => {
  try {
    const readStream =  createReadStream(pathToFile)
    readStream.pipe(stdout)

  } catch (err) {
    if (err.code === 'ENOENT') informOfOperationFailed()
    else console.log(err.message)
  }
}