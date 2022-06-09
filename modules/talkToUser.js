import { userHomeDir } from './pathVars.js'

const 
  informOfInvalidInput = 'Invalid input',
  informOfOperationFailed = 'Operation failed',

  sayHiToUser = (userName = 'User') => {
    return `Welcome to the File Manager, ${userName}!`
  },
  sayByeToUser = (userName = 'User') => {
    return `Thank you for using File Manager, ${userName}!`
  },
  informOfCurrentWorkingDir = (cwd = userHomeDir) => {
    return `You are currently in ${cwd}`
  }

export {
  sayHiToUser as sayHi,
  sayByeToUser as sayBye,
  informOfCurrentWorkingDir as cwd,
  informOfInvalidInput as invalidInput,
  informOfOperationFailed as operationFailed
}