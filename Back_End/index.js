const express = require('express')
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const Faculty = require('./Faculty');
const cors = require('cors')
const connectionstring = "mongodb+srv://jaydeep:210406@cluster0.gbssi.mongodb.net/Faculty";

mongoose.connect(connectionstring).then(()=>{
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    console.log("Connected to MongoDB");

    app.get('/faculty', async (req, res) => {
        const faculty = await Faculty.find();
        res.send(faculty);
        console.log(faculty);
    });

    app.get('/faculty/:id', async (req, res) => {
        const facultys = await Faculty.findOne({id:req.params.id});
        res.json(facultys);
        console.log(facultys);
    });

    app.post('/faculty', async (req, res) => {
        const faculty = new Faculty({...req.body});
        await faculty.save();
        res.send(faculty);
    });

    app.delete('/faculty/:id',async (req,res)=>{
        const ans = await Faculty.deleteOne({id:req.params.id})
        console.log(ans);
        res.send(ans);
    });

    app.patch('/faculty',async (req,res)=>{
        const faculty = await Faculty.findByIdAndUpdate({id:req.params.id},req.body)
        console.log(faculty)
        res.send(faculty)
    })

    app.listen(7000, () => {
        console.log("Server is running on port 7000");
    });
    
});


   