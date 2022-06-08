export { appRootDir, path2FileOrDir } from './getPath.js'
import { homedir } from 'os'

const userHomeDir = homedir()

export { userHomeDir }