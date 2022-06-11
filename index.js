import { chdir, stdin, stdout, argv } from 'process'
import { createInterface } from 'readline'
import { appRootDir, userHomeDir, path2FileOrDir } from './modules/accessory/pathVars.js'
import { sayByeToUser, sayHiToUser, informOfCurrentWorkingDir } from './modules/accessory/talkToUser.js'
import { parseInput } from './modules/accessory/parseInput.js'
import { handleCommand } from './modules/accessory/handleCommand.js'

const rl = createInterface({
  input: stdin,
  output: stdout
})


const runApp = async () => {
  sayHiToUser()
  informOfCurrentWorkingDir()
  
  rl.prompt()
  
  rl.on('line', (inputData) => {
    if (/.exit/gi.test(inputData)) rl.close()
  
    const commandParsed = parseInput(inputData)
    handleCommand(commandParsed)
  
    informOfCurrentWorkingDir()
    rl.prompt()
  })
  
  rl.on('close', () => {
    sayByeToUser()
    process.exit()
  })
}

runApp()