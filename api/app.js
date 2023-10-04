const express =require('express');
const cors= require('cors')

const app=express();

app.use(cors());

app.get('/',(req,res)=>{
    res.json([
        {
            "id":"1",
            "student":"Ahmed Elbaz",
            "filiere":"ASEDS"
        },
        {
            "id":"2",
            "student":"Abdellah Igajane",
            "filiere":"ICCN"
        },
        {
            "id":"3",
            "student":"Alabadila Malainine",
            "filiere":"AMOA"
        }
    ])
})

app.listen(4000 ,()=>{
    console.log('listening on port 4000');
})


