import { getUserName } from './getUserName.js'
import { cwd } from 'process'
import { blueOnBlack } from './colorsList.js'

const 
  sayHiToUser = () => {
    console.log(`\n🙂 Welcome to the File Manager, ${getUserName()}!`)
  },
  sayByeToUser = () => {
    console.log(`\nThank you for using File Manager, ${getUserName()}!`)
  },
  informOfCurrentWorkingDir = () => {
    console.log(blueOnBlack, `\nYou are currently in `, `${cwd()}`)
  },
  informOfInvalidInput = () => {
    console.log('⚠️ Invalid input')
  },
  informOfOperationFailed = () => {
    console.log('⛔ Operation failed')
  }

export {
  sayHiToUser as sayHi,
  sayByeToUser as sayBye,
  informOfCurrentWorkingDir as cwd,
  informOfInvalidInput as invalidInput,
  informOfOperationFailed as operationFailed
}