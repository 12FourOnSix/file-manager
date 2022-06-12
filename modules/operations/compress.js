import { createBrotliCompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream, existsSync } from 'fs'
import { resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../accessory/talkToUser.js'


export const compress = async (src, dest) => {
  try {
    const 
      srcPath = resolve(src),
      destPath = resolve(dest),
      readStream = createReadStream(srcPath),
      writeStream = createWriteStream(destPath),
      brotliCompress = createBrotliCompress()

    readStream.on('error', (err) => {
      if (err.code !== 'ENOENT') {
        informOfOperationFailed(err)
      }
    })

    if (existsSync(destPath)) return

    await pipeline(
      readStream, 
      brotliCompress, 
      writeStream
    )
  
    informOfSuccess()

  } catch(err) {
    informOfOperationFailed(err)
  }
}