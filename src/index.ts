import { json } from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';

const { NODE_PORT = 80 } = process.env;

const server = express();
server.use(json());
server.use(cors());

http.createServer(server).listen(NODE_PORT);
