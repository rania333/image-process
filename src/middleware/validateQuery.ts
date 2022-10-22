import {Request, Response} from 'express'
import {IRequest} from '../models/requestModels'

export const validateQuery = (req: Request, res: Response, nxt: () => void ) => {
    const availableFiles = ['jerry', 'dora', 'mecky', 'spongpop', 'twetty']
    const {filename, width, height}: IRequest = req.query
    // Check if filename is available
    if(!filename || !width || !height) {
        res.status(400).send('you should enter filename, width, height like this => http://localhost:3000/api?filename=..&width=..&height=..')
    } else if (!availableFiles.includes(filename)) {
        res.status(400).send('the filename not valid, please choose one from   ' + availableFiles)
    } else if (width<=0 || height<=0) {
        res.status(400).send('please enter valid width and height, greater than 0')
    } else {
        nxt()
    }
    
  };
  