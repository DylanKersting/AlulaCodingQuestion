import Router from 'koa-router'
import { asteroids } from './nasa.js'

const router = new Router()

router.post('/asteroids', asteroids)

export default router.routes()