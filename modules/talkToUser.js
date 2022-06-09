import { getUserName } from './getUserName.js'
import { cwd } from 'process'
/* import { whiteOnRed } from './colorsList.js' */

const 
  sayHiToUser = () => {
    console.log(`\nWelcome to the File Manager, ${getUserName()}!`)
  },
  sayByeToUser = () => {
    console.log(`\nThank you for using File Manager, ${getUserName()}!`)
  },
  informOfCurrentWorkingDir = () => {
    console.log(`\nYou are currently in ${cwd()}`)
  },
  informOfInvalidInput = () => {
    console.log('Invalid input')
  },
  informOfOperationFailed = () => {
    console.log('Operation failed')
  }

export {
  sayHiToUser as sayHi,
  sayByeToUser as sayBye,
  informOfCurrentWorkingDir as cwd,
  informOfInvalidInput as invalidInput,
  informOfOperationFailed as operationFailed
}