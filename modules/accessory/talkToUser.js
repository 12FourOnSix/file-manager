import { getUserName } from './getUserName.js'
import { cwd } from 'process'
import { blueOnBlack } from './colorsList.js'

const 
  sayHiToUser = () => {
    console.log(`Welcome to the File Manager, ${getUserName()}!`)
  },
  sayByeToUser = () => {
    console.log(`\n\nThank you for using File Manager, ${getUserName()}!`)
  },
  informOfCurrentWorkingDir = () => {
    console.log(blueOnBlack, `\nYou are currently in `, `${cwd()}\n`)
  },
  informOfInvalidInput = () => {
    console.log('\nInvalid input')
  },
  informOfOperationFailed = (err) => {
    console.log('\n❌ Operation failed\n', err.message)
  },
  informOfFileCompressed = () => {
    console.log('\n✔️  Done! Your file has been compressed')
  },
  informOfFileDecompressed = () => {
    console.log('\n✔️  Done! Your file has been decompressed')
  },
  informOfFileCreated = () => {
    console.log('\n✔️  Done! New file has been created')
  },
  informOfSuccess = () => {
    console.log('\n✔️  Done!')
  }

export {
  sayHiToUser,
  sayByeToUser,
  informOfCurrentWorkingDir,
  informOfInvalidInput,
  informOfOperationFailed,
  informOfFileCompressed,
  informOfFileDecompressed,
  informOfFileCreated,
  informOfSuccess
}