import Router from 'koa-router'
const router = new Router()
import { asteroids } from './nasa.js'

router.post('/asteroids', asteroids)

export default router.routes()