import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'
import { createServer } from 'http'
import { Server } from 'socket.io'
const app = express();
dotenv.config()

app.get('/',(req,res)=>{
    res.send('hello world')
})