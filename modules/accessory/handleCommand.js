import { getOpSysInfo } from '../operations/getOSInfo.js'
import { calculateHash } from '../operations/calcHash.js'
import { compress } from '../operations/compress.js'
import { decompress } from '../operations/decompress.js'
import { navigate } from '../operations/navigate.js'
import { copy } from '../operations/fileOps/copy.js'
import { add } from '../operations/fileOps/add.js'
import { remove } from '../operations/fileOps/remove.js'
import { move } from '../operations/fileOps/move.js'
import { cat } from '../operations/fileOps/cat.js'
import { rename } from '../operations/fileOps/rename.js'


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

    case 'cat':
      await cat(arg_1)
      break

    case 'add':
      await add(arg_1)
      break

    case 'rn':
      await rename(arg_1, arg_2)
      break

    case 'cp':
      await copy(arg_1, arg_2)
      break

    case 'mv':
      await move(arg_1, arg_2)
      break

    case 'rm':
      await remove(arg_1)  
      break
  }
}