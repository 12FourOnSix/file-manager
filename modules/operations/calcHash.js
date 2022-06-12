import { readFile } from 'fs/promises'
import { createHash } from 'crypto'
import { resolve, basename } from 'path'
import { informOfOperationFailed } from '../accessory/talkToUser.js'
import { greenFont } from '../accessory/colorsList.js'

export const calculateHash = async (pathToSrc) => {
  try {
    const 
      src = resolve(pathToSrc),
      fileContent = await readFile(src, { encoding: 'utf-8' }),
      hash = createHash('sha256').update(fileContent).digest('hex')

    console.log(greenFont, `\nThe hash for the "${basename(src)}" is: \n`, `${hash}`)
    return hash

  } catch(err) {
      informOfOperationFailed(err)
  }
}