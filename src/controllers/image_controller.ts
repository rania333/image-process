import {Request, Response} from 'express'

// import path from 'path'
import {IRequest} from '../models/requestModels'
import {checkIfImageFolderExistOrNot, checkImageSize, createImageFolder, createThumbFolder} from '../helper/file'
import {createProcessedImage, getImagePath} from '../helper/image'

const getImage = async (req: Request, res:Response): Promise<void> => {
    let {filename, width, height}: IRequest = req.query
    // check if one of query not exists
    if(!filename || !width || !height) {
         res.status(200).send(`
        the valid url is: http://localhost:3000/api?filename=...&width=...&height=...
        and here is the allowed filename: dora / jerry / mecky / spong / twetty`)
    } else {
        // create thumb folder
        await createThumbFolder()
        // check if image folder exist or not
        checkIfImageFolderExistOrNot(filename).then(async (result: boolean) => {
            if(result) {
                // if sizes exist or not
                if(checkImageSize({filename, width, height})) {
                    const imagepath = await getImagePath({filename, width, height})
                    if(imagepath) {
                        res.sendFile(imagepath)
                    }
                } else {
                    // create image with size
                    await createProcessedImage({filename, width: width ? +width : 200, height: height ? +height : 200})
                    const imagepath = await getImagePath({filename, width, height})
                    if(imagepath) {
                        res.sendFile(imagepath)
                    }
                }
            } else {
                // create new one
                await createImageFolder(filename)
                // check file size
                // if sizes exist or not
                if(checkImageSize({filename, width, height})) {
                    const imagepath = await getImagePath({filename, width, height})
                    if(imagepath) {
                        res.sendFile(imagepath)
                    }
                } else {
                    // create image with size
                    await createProcessedImage({filename, width: width ? +width : 200, height: height ? +height : 200})
                    const imagepath = await getImagePath({filename, width, height})
                    if(imagepath) {
                        res.sendFile(imagepath)
                    }
                }
            }
        })
        
    }

}

export default getImage