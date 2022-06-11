import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import { createHash } from 'crypto'
import { win32 } from 'path'
import { path2FileOrDir } from '../accessory/getPath.js'
import { informOfOperationFailed } from '../accessory/talkToUser.js'
import { greenFont } from '../accessory/colorsList.js'

const pathToSrc = path2FileOrDir('C:/Users/Acer/Desktop/RSSProjects/node-nodejs-basics/src/hash/files/fileToCalculateHashFor.txt')

export const calculateHash = async () => {
    if (!existsSync(pathToSrc)) throw new Error(informOfOperationFailed())

    const fileContent = await readFile(pathToSrc, { encoding: 'utf-8' })

    const hash = createHash('sha256')
    hash.update(fileContent)

    const hashValue = hash.digest('hex')
    console.log(greenFont, `\nThe hash for the "${win32.basename(pathToSrc)}" is: \n`, `${hashValue}`)

    return hashValue
}