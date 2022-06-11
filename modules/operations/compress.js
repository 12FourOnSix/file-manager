import { createBrotliCompress } from 'zlib'
import { pipeline } from 'stream/promises'
import { createReadStream, createWriteStream, existsSync } from 'fs'
import { resolve, parse, format } from 'path'
import { informOfOperationFailed, informOfFileCompressed } from './talkToUser.js'


export const compress = async (src, dest) => {
  const 
    pathToSrc = resolve(src),
    destIsFile = dest.endsWith('.br'),
    pathToDestination = destIsFile ? resolve(dest) : format({
              dir: resolve(dest),
              name: parse(src).name,
              ext: '.br'
            }),

    readStream = createReadStream(pathToSrc),
    writeStream = createWriteStream(pathToDestination),
    brotliCompress = createBrotliCompress()


  readStream.on('error', (err) => {
    if (err.code === 'ENOENT') {
      informOfOperationFailed()
    }
  })

  if (existsSync(pathToDestination)) return

  await pipeline(
    readStream, 
    brotliCompress, 
    writeStream
  )

  informOfFileCompressed()
}