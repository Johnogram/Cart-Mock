import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { router } from './routes/router';

const { NODE_PORT = 80 } = process.env;

const server = express();
server.use(json());
server.use(cors());
server.use(router);

http.createServer(server).listen(NODE_PORT);
