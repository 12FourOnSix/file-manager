import { writeFile } from 'fs/promises'
import { cwd } from 'process'
import { resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const add = async (new_file_name) => {
  try {
    const pathDest = resolve(cwd(), new_file_name)
    await writeFile(pathDest, '', { flag: 'wx'})
    informOfSuccess()
    
  } catch(err) {
    informOfOperationFailed(err)
  }
}