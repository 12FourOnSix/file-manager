import { copyFile, rm } from 'fs/promises'
import { constants } from 'fs'
import { parse, resolve } from 'path'
import { cwd } from 'process'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const move = async (path_to_file, path_to_new_directory) => {
  try {
    const 
      srcPath = resolve(cwd(), path_to_file),
      destBaseName = parse(path_to_new_directory).base ? '' : parse(srcPath).base,
      destFullPath = resolve(cwd(), path_to_new_directory, destBaseName)

    await copyFile(srcPath, destFullPath, constants.COPYFILE_EXCL)
    await rm(srcPath)
    informOfSuccess()

  } catch (err) {
    informOfOperationFailed(err)
  }
}