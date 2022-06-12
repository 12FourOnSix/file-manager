import { readdir, stat } from 'fs/promises'
import { magentaFont, yellowFont } from '../../accessory/colorsList.js'
import { informOfOperationFailed } from '../../accessory/talkToUser.js'

export const list = async (cwd) => {
  try {
    const filenamesArr = await readdir(cwd)

    console.log(`The content of the current directory:\n`)
  
    for (const filename of filenamesArr) {
      const statFile = await stat(filename)
  
      if (statFile.isDirectory()) {
          console.log(magentaFont, '[Folder] ', filename)
      } else {
          console.log(yellowFont, '[ File ] ', filename)
      }
    }

  } catch (err) {
    informOfOperationFailed(err)
  }
}