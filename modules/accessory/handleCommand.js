import { getOpSysInfo } from '../operations/getOSInfo.js'

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
    
  }
}