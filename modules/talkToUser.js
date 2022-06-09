import { getUserName } from './getUserName.js'
import { cwd } from 'process'

const 
  sayHiToUser = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`)
  },
  sayByeToUser = () => {
    console.log(`Thank you for using File Manager, ${getUserName()}!`)
  },
  informOfCurrentWorkingDir = () => {
    console.log(`You are currently in ${cwd()}`)
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