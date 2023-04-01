import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import bodyParser from 'body-parser'
import multer from 'multer'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { PokemonController } from '../src/controllers/PokemonController'

// Set up the Express server with the middleware
const app = createExpressServer({
    controllers: [
        PokemonController
    ],
    middlewares: [
        morgan('dev'),
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        multer().any(),
        helmet(),
        cors(),
    ],
})

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

