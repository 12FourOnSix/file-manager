import { copyFile } from 'fs/promises'
import { constants } from 'fs'
import { cwd } from 'process'
import { parse, resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const copy = async (path_to_file, path_to_new_directory) => {
    try {
      const 
        srcPath = resolve(cwd(), path_to_file),
        destBaseName = parse(path_to_new_directory).base ? '' : parse(srcPath).base,
        destFullPath = resolve(cwd(), path_to_new_directory, destBaseName)

      await copyFile(srcPath, destFullPath, constants.COPYFILE_EXCL)
      informOfSuccess()

    } catch (err) {
      informOfOperationFailed(err)
    }
}