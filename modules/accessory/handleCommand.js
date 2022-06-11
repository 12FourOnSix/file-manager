import { getOpSysInfo } from '../operations/getOSInfo.js'
import { calculateHash } from '../operations/calcHash.js'
import { compress } from '../operations/compress.js'
import { decompress } from '../operations/decompress.js'

export const handleCommand = (commandObject) => {
  const {
    command,
    arg_1,
    arg_2
  } = commandObject

  switch (command) {
    case 'os':
      getOpSysInfo(arg_1)
      break
    case 'hash':
      calculateHash(arg_1)
      break
    case 'compress':
      compress(arg_1, arg_2)
      break
    case 'decompress':
      decompress(arg_1, arg_2)
      break
    
    
  }
}