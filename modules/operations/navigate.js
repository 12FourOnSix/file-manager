import { cwd, chdir } from 'process'
import { resolve } from 'path'

export const navigate = (commandObject) => {
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
      break
  }
}