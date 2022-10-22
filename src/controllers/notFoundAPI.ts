import {Request, Response} from 'express'

export const notFoundApi = async (_req: Request, res: Response) => {
    res.status(404).send('not valid api')
}