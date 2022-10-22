import fs from 'fs';
import path from 'path';

import {IRequest} from '../models/requestModels'

export const checkIfImageFolderExistOrNot = async (fileName: string): Promise<boolean> => {
     // get path info
     const dir = path.join(__dirname, '../../public/thumb/' + fileName)
    return fs.existsSync(dir)
 
}

export const createThumbFolder = async(): Promise<void> => {
    try {
      await fs.accessSync(path.join(__dirname, '../../public/thumb'));
    } catch {
      fs.mkdirSync(path.join(__dirname, '../../public/thumb'));
    }
  }


export const checkImageSize = (fileData: IRequest): boolean => {
    let {filename, width, height} = fileData  
    // get path info
    const dir = path.join(__dirname, '../../public/thumb/' + fileData.filename + '\\')

    const imageName = `${dir}${filename}-${width}-${height}.jpg`
    // console.log(fs.existsSync(imageName))
    return fs.existsSync(imageName)
}

export const createImageFolder = (folderName?: string): void => {
     // get path info
     const dir = path.join(__dirname, '../../public/thumb/', folderName || '')

     fs.mkdirSync(dir)
}


