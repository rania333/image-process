import express from 'express'
const app: express.Application = express();



const port: number = 3000
app.listen(port, () => {
  console.log('listening on port: '+ port)
});