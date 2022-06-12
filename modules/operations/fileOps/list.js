import { readdir, stat } from 'fs/promises'
import { magentaFont } from '../../accessory/colorsList.js'

export const list = async (cwd) => {
    const filenamesArr = await readdir(cwd)

    console.log(`The content of the current directory:\n`)

    for (const filename of filenamesArr) {
        try {
            const statFile = await stat(filename)

            if (statFile.isDirectory()) {
                console.log(magentaFont, '[Folder] ', filename)
                continue
            }
    
            console.log(filename)

        } catch (err) {
            console.error(err.message) // may be EPERM errors for some folders
        }
    }
}