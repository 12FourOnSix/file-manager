import { cwd, chdir } from 'process'
import { resolve } from 'path'
import { list } from '../operations/fileOps/list.js'

export const navigate = async (commandObject) => {
  const {
    command,
    arg_1
  } = commandObject
  
  switch (command) {
    case 'up':
      const upDir = resolve(cwd(), '..')
      chdir(upDir)      
      break

    case 'cd':
      const newDir = resolve(cwd(), arg_1)
      chdir(newDir)
      break

    case 'ls':
      await list(cwd())
      break
  }
}