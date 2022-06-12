import { createBrotliDecompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream, existsSync } from 'fs'
import { resolve } from 'path'
import { informOfOperationFailed, informOfSuccess } from '../accessory/talkToUser.js'


export const decompress = async (src, dest) => {
  try {
    const 
      crsPath = resolve(src),
      destPath = resolve(dest),
      readStream = createReadStream(crsPath),
      writeStream = createWriteStream(destPath),
      brotliDecompress = createBrotliDecompress()

    readStream.on('error', (err) => {
      if (err.code === 'ENOENT') {
        informOfOperationFailed(err)
      }
    })

    if (existsSync(destPath)) return

    await pipeline(
      readStream, 
      brotliDecompress, 
      writeStream
    )

    informOfSuccess()

  } catch (err) {
    informOfOperationFailed(err)
    console.log(err)
  }
}