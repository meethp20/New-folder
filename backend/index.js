import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createServer } from 'http'

const app = express();
try{
    dotenv.config()
}catch(err){
    console.log('error in loading env file')
}

const PORT = process.env.PORT || 5000
app.get('/',(req,res)=>{
    res.send('hello world')
}) 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})