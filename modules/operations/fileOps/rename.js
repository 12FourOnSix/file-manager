import { rename as rn } from 'fs/promises'
import { existsSync } from 'fs'
import { cwd } from 'process'
import { resolve, extname, dirname } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const rename = async (path_to_file, new_filename) => {
  try {
    const 
      oldPathToFile = resolve(cwd(), path_to_file),
      extOfNewName = extname(new_filename) ? '' : extname(oldPathToFile),
      newPathToFile = resolve(dirname(oldPathToFile), new_filename, extOfNewName)

    if (!existsSync(oldPathToFile) || existsSync(newPathToFile)) throw new Error
    
    await rn(oldPathToFile, newPathToFile)
    informOfSuccess()

  } catch (err) {
    informOfOperationFailed()
  }
}