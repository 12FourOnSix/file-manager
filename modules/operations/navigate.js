import { chdir, cwd } from 'process'
import { resolve } from 'path'
import { list } from '../operations/fileOps/list.js'
import { informOfOperationFailed } from '../accessory/talkToUser.js'

export const navigate = async (commandObject) => {
  try {
    if (!commandObject) return 

    const {
      command,
      arg_1
    } = commandObject
    
    switch (command) {
      case 'up':
        const upDir = resolve('..')
        chdir(upDir)      
        break
  
      case 'cd':
        const newDir = resolve(arg_1)
        chdir(newDir)
        break
  
      case 'ls':
        await list(cwd())
        break
    }

  } catch (err) {
    informOfOperationFailed(err)
  }
}