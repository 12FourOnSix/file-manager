import { argv } from 'process'

const getUserName = () => {
  const 
    userNameArg = argv.slice(2).filter(arg => arg.startsWith('--username')),
    userName = userNameArg[0]?.replace('--username=', '')

  return userName || 'User'
}

export { getUserName }