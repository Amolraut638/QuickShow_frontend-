import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express();
const port = 3000;

//copnnecting the database
await connectDB();

//moddleware , all the requests will be parsed by using this json method in this backend server
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//first API route
app.get('/',(req, res) => res.send('server is live!'))
app.use('/api/inngest', serve({ client: inngest, functions }))


app.listen(port, () => console.log(`server listening at http:/localhost:${port}`));