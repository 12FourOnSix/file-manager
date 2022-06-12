import { copyFile } from 'fs/promises'
import { constants } from 'fs'
import { parse, resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../../accessory/talkToUser.js'

export const copy = async (srcFilePath, destDirPath) => {
    try {
      const
        srcFullPath = resolve(srcFilePath),
        srcFilename = parse(srcFilePath).base,
        destFullPath = resolve(destDirPath, srcFilename)

      await copyFile(srcFullPath, destFullPath, constants.COPYFILE_EXCL)
      informOfSuccess()

    } catch (err) {
      informOfOperationFailed(err)
    }
}