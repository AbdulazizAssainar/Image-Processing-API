import express from 'express';   
const img = express.Router();

img.get('/', (req, res) => { 
    res.send('students route');
 });

export default img;