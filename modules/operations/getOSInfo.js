import * as os from 'os'
import { greenFont } from '../accessory/colorsList.js'

const 
  { EOL, cpus, homedir, userInfo, arch } = os,

  showEOLInfo = () => {
    console.log(greenFont, `\nThe operating system-specific end-of-line (EOL) marker: `, `${JSON.stringify(EOL)}`)
  },

  showHomeDirInfo = () => {
    console.log(greenFont, `\nCurrent user's home directory: `, `${homedir()}`)
  },

  showUserNameInfo = () => {
    console.log(greenFont, `\nCurrent system user name: `, `${userInfo().username}`)
  },

  showArchInfo = () => {
    console.log(greenFont, `\nCPU architecture: `, `${arch()}`)
  },

  showCpusInfo = () => {
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

export const getOpSysInfo = (command) => {
  switch (command) {
    case '--eol':
      showEOLInfo()
      break

    case '--cpus':
      showCpusInfo()
      break

    case '--homedir':
      showHomeDirInfo()
      break

    case '--username':
      showUserNameInfo()
      break

    case '--architecture':
      showArchInfo()
      break
  }
}