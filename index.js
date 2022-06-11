import { chdir, stdin, stdout, argv } from 'process'
import { homedir } from 'os'
import { createInterface } from 'readline'
import { appRootDir, userHomeDir, path2FileOrDir } from './modules/accessory/pathVars.js'
import { sayByeToUser, sayHiToUser, informOfCurrentWorkingDir } from './modules/accessory/talkToUser.js'
import { parseInput } from './modules/accessory/parseInput.js'
import { handleCommand } from './modules/accessory/handleCommand.js'

const rl = createInterface({
  input: stdin,
  output: stdout
})


const runApp = () => {
  sayHiToUser()
  chdir(homedir())
  informOfCurrentWorkingDir()
  
  rl.prompt()
  
  rl.on('line', async (inputData) => {
    if (/.exit/gi.test(inputData)) rl.close()
  
    const commandParsed = parseInput(inputData)
    await handleCommand(commandParsed)
  
    informOfCurrentWorkingDir()
    rl.prompt()
  })
  
  rl.on('close', () => {
    sayByeToUser()
    process.exit()
  })
}

runApp()