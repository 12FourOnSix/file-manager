import * as os from 'os'
import { greenFont } from './colorsList.js'

const { EOL, cpus, homedir, userInfo, arch } = os

const eolInfo = () => {
  console.log(greenFont, `\nThe operating system-specific end-of-line (EOL) marker: `, `${JSON.stringify(EOL)}`)
}

const homeDirInfo = () => {
  console.log(greenFont, `\nCurrent user's home directory: `, `${homedir()}`)
}

const userNameInfo = () => {
  console.log(greenFont, `\nCurrent system user name: `, `${userInfo().username}`)
}

const architectureInfo = () => {
  console.log(greenFont, `\nCPU architecture: `, `${arch()}`)
}

const cpusInfo = () => {
  console.log(greenFont, `\nThe total number of CPUs: `, `${cpus().length}`)

  const cpusInfoTable = cpus().reduce((acc, curCPU, index) => {
    const 
     cpuNo = index + 1,
     modelProps = curCPU.model.split('@'),
     model = modelProps[0].trim(),
     clockRate = parseFloat(modelProps[1])

    acc.push({
      'Cpu No': cpuNo,
      'Cpu model': model,
      'CPU clock rate, GHz': clockRate
    })

    return acc
  }, [])

  console.table(cpusInfoTable)
}

export {
  eolInfo, 
  homeDirInfo, 
  userNameInfo, 
  architectureInfo, 
  cpusInfo
}