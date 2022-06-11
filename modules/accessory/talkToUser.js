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
    console.log('\n⚠️ Invalid input')
  },
  informOfOperationFailed = () => {
    console.log('\n❌ Operation failed')
  },
  informOfFileCompressed = () => {
    console.log('\n✔️  Done! Your file has been compressed')
  },
  informOfFileDecompressed = () => {
    console.log('\n✔️  Done! Your file has been decompressed')
  }

export {
  sayHiToUser,
  sayByeToUser,
  informOfCurrentWorkingDir,
  informOfInvalidInput,
  informOfOperationFailed,
  informOfFileCompressed,
  informOfFileDecompressed
}