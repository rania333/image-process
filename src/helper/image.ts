import path from 'path'

import sharp from 'sharp'
import {IRequest} from '../models/requestModels'


export const createProcessedImage = async (fileData: IRequest): Promise<null | string> => {
    // get path info
    const dir = path.join(__dirname, '../../public/thumb/' + fileData.filename)
    const originalImagePath = path.join(__dirname, '../../public/img/' + fileData.filename + '.jpg');
    const imageName = `${fileData.filename}-${fileData.width}-${fileData.height}.jpg`
    try {
        await sharp(originalImagePath)
        .jpeg()
        .resize(fileData.width, fileData.height)
        .toFile(dir +'/'+ imageName) 
        return null
    } catch(err) {
        return 'failed'
    }
    
}

export const getImagePath = (fileData: IRequest): string => {
    const imagePath = path.join(__dirname, '../../public/thumb/' + fileData.filename + '/' +
     fileData.filename + '-' + fileData.width + '-' + fileData.height + '.jpg');
    return imagePath
}