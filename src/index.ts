import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: '*', // 允许的源
  methods: ['GET', 'POST'], // 允许的HTTP方法
  allowedHeaders: ['Content-Type', 'Authorization'] // 允许的自定义请求头
}));

app.get('/', (_req: Request, res: Response) => {
	return res.send('Express Typescript on Vercel')
})

let logs: any[] = []
app.get('/log', (_req: Request, res: Response) => {
	if (_req.query.m) {
		logs.push(_req.query.m)
	}
	const body = JSON.stringify(logs, null, 4)

	return res.send(body)
})

app.get('/log/reset', (_req: Request, res: Response) => {
	logs = []
	
	return res.send('ok')
})

app.listen(port, () => {
	return console.log(`Server is listening on ${port}`)
})
