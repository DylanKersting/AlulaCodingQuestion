import Koa from 'koa'
import router from './api/routes.js'
import http from 'http'
import koaBody from 'koa-body'

const app = new Koa()

app.use(koaBody());
app.use(router)

http.createServer(app.callback()).listen(3000)
console.log('Listening...')