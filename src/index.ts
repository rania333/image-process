
import express from 'express';

import imageRoutes from './routes/image_routes';

const app: express.Application = express();


// routes
app.use('/api', imageRoutes);

const port = 4004;
app.listen(port, () => {
    console.log('listening on port: '+ port);
});