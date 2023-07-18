"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'] // 允许的自定义请求头
}));
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
let logs = [];
app.get('/log', (_req, res) => {
    if (_req.query.m) {
        logs.push(_req.query.m);
    }
    const body = JSON.stringify(logs, null, 4);
    return res.send(body);
});
app.get('/log/reset', (_req, res) => {
    logs = [];
    return res.send('ok');
});
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map