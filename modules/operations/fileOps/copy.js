import { copyFile, stat } from 'fs/promises'
import { constants } from 'fs'
import { parse, resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const copy = async (srcPath, destPath) => {
    try {
      const
        statDest = await stat(destPath),
        isDirDest = statDest.isDirectory(),

        srcFullPath = resolve(srcPath),
        srcFilename = parse(srcPath).base,
        destFullPath = resolve(destPath, isDirDest ? srcFilename : '')

      await copyFile(srcFullPath, destFullPath, constants.COPYFILE_EXCL)
      informOfSuccess()

    } catch (err) {
      informOfOperationFailed(err)
    }
}