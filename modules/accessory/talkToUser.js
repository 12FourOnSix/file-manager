import { getUserName } from './getUserName.js'
import { cwd } from 'process'
import { cyanFont, redFont, yellowFont } from './colorsList.js'

const 
  sayHiToUser = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`)
  },
  sayByeToUser = () => {
    console.log(`\n\nThank you for using File Manager, ${getUserName()}!`)
  },
  informOfCurrentWorkingDir = () => {
    console.log(cyanFont, `\nYou are currently in `, `${cwd()}\n`)
  },
  informOfInvalidInput = () => {
    console.log(redFont, '\nInvalid input')
  },
  informOfOperationFailed = (err) => {
    console.log(redFont, '\nOperation failed')
    console.log(err.message)
  },
  informOfSuccess = () => {
    console.log(yellowFont, '\nDone!')
  }

export {
  sayHiToUser,
  sayByeToUser,
  informOfCurrentWorkingDir,
  informOfInvalidInput,
  informOfOperationFailed,
  informOfSuccess
}