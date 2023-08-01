import express from 'express';
import web from './routes/web.js';

const app = express();
const port=3000;

//Set Template Engine
app.set('view engine','ejs');

//Load Routes 
app.use('/',web)

app.listen(port,()=>{
    console.log(`App listening to the port: ${port}`);
})