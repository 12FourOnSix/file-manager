import { informOfInvalidInput } from './talkToUser.js'

const 
  allowedCommands = [
    'up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'
  ],
  allowedOpSysArgs = [
    '--eol', '--cpus', '--homedir', '--username', '--architecture'
  ]

export const parseInput = (line) => {
  const commandMayBeUppercase = allowedCommands
  if (!commandMayBeUppercase.some(command => line.startsWith(command))) {
    line = line.toLowerCase()
  }

  const 
    strArr = line.split(' '),
    commandParsed = {
      command: strArr?.[0],
      arg_1: strArr?.[1],
      arg_2: strArr?.[2]
    }

  if (!allowedCommands.includes(commandParsed.command)) {
    informOfInvalidInput()
    return
  }

  if (commandParsed.command === 'os' &&
      !allowedOpSysArgs.includes(commandParsed.arg_1)) {          
      informOfInvalidInput()
      return
  }
  
  return commandParsed || {}
}