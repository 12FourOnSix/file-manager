import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const 
  url2Path = fileURLToPath(import.meta.url),
  appRootDir = resolve(dirname(url2Path), '../'),
  
  path2FileOrDir = (...arrOfPaths) => {
    return resolve(...arrOfPaths)
  }

export { 
  appRootDir, 
  path2FileOrDir 
}