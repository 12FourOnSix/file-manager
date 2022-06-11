import { createBrotliDecompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream, existsSync } from 'fs'
import { resolve, parse, format } from 'path'
import { informOfOperationFailed, informOfFileDecompressed } from '../accessory/talkToUser.js'
import { cwd } from 'process'


export const decompress = async (src, dest) => {
  const 
    pathToSrc = resolve(cwd(), src),
    pathToDestination = resolve(cwd(), dest),

    readStream = createReadStream(pathToSrc),
    writeStream = createWriteStream(pathToDestination),
    brotliDecompress = createBrotliDecompress()


  readStream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      informOfOperationFailed()
    }
  })

  await pipeline(
    readStream, 
    brotliDecompress, 
    writeStream
  )

  informOfFileDecompressed()
}