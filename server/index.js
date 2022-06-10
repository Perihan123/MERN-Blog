const express=require('express');
const bodyParser =require('body-parser');
const cors=require('cors');
require('./models/db');
const postRoutes=require ('./routes/post')
const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

app.get("/",(req,res)=>{
    res.json({//Json döndürme
        author:"Coding  :))",
        message:"Happy New Year"
    })
});

app.use("/posts",postRoutes);//post endpointinin işlemlerini yapabilmesi için

const PORT=5000;

app.listen(PORT,()=>{
    console.log(` Server ${PORT} 'unda çalışıyor...`)
});