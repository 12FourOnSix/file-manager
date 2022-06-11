import { getOpSysInfo } from '../operations/getOSInfo.js'
import { calculateHash } from '../operations/calcHash.js'
import { compress } from '../operations/compress.js'
import { decompress } from '../operations/decompress.js'
import { navigate } from '../operations/navigate.js'


export const handleCommand = async (commandObject) => {
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
    case 'up':
    case 'cd':
    case 'ls':
      await navigate(commandObject)
      break
    
  }
}