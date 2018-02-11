import * as express from 'express'
// import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import * as compression from 'compression'
import * as morgan from 'morgan'
import * as cookieParser from 'cookie-parser'

class Server {

  // set app to be of type express.Application
  public app: express.Application

  constructor () {
    this.app = express()
    this.config()
    this.routes()
  }

  // application config
  public config (): void {

    // ENABLE IF MONGOOSE
    // mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true })

    // Middleware
    this.app.use(cookieParser())
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
    this.app.use(helmet())
    this.app.use(morgan('combined'))
    this.app.use(compression())

    // cors
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
      res.header('Access-Control-Allow-Credentials', 'true')
      if (req.method === 'OPTIONS') {
        res.sendStatus(200)
      } else {
        next()
      }
    })

  }

  // application routes
  public routes (): void {
    const router: express.Router = express.Router()

    // Set up API routes
  }
}

// export
export default new Server().app
