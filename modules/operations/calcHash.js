import { readFile } from 'fs/promises'
import { cwd } from 'process'
import { existsSync } from 'fs'
import { createHash } from 'crypto'
import { resolve } from 'path'
import { informOfOperationFailed } from '../accessory/talkToUser.js'
import { greenFont } from '../accessory/colorsList.js'


export const calculateHash = async (pathToSrc) => {
    const src = resolve(cwd(), pathToSrc)

    if (!existsSync(src)) throw new Error(informOfOperationFailed())

    const fileContent = await readFile(src, { encoding: 'utf-8' })

    const hash = createHash('sha256')
    hash.update(fileContent)

    const hashValue = hash.digest('hex')
    console.log(greenFont, `\nThe hash for the "${basename(src)}" is: \n`, `${hashValue}`)

    return hashValue
}