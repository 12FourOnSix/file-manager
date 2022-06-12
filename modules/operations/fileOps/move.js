import { copyFile, rm } from 'fs/promises'
import { constants } from 'fs'
import { parse, resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const move = async (path_to_file, path_to_new_directory) => {
  try {
    const 
      srcPath = resolve(path_to_file),
      destBaseName = parse(path_to_new_directory).base ? '' : parse(srcPath).base,
      destFullPath = resolve(path_to_new_directory, destBaseName)

    await copyFile(srcPath, destFullPath, constants.COPYFILE_EXCL)
    await rm(srcPath)
    informOfSuccess()

  } catch (err) {
    informOfOperationFailed(err)
  }
}