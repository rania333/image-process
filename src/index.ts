
import express from 'express';

import imageRoutes from './routes/image_routes';
import {validateQuery} from './middleware/validateQuery'
const app: express.Application = express();

//custom middleware for validation
app.use(validateQuery)
// routes
app.use('/api', imageRoutes);

const port = 3000;
app.listen(port, () => {
    console.log('listening on port: '+ port);
});