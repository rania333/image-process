
import express from 'express';

import imageRoutes from './routes/image_routes';
import {validateQuery} from './middleware/validateQuery'
import {notFoundApi} from './controllers/notFoundAPI'
export const app: express.Application = express();

//custom middleware for validation
// routes
app.use('/api', validateQuery, imageRoutes);
app.use('**', notFoundApi)

const port = 3000;
app.listen(port, () => {
    console.log('listening on port: '+ port);
});

