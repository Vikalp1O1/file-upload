const express=require('express');
const app=express();
const multer = require('multer');


const path= require('path');
const PORT=8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended:false}))

const storage = multer.diskStorage({
    destination: function(req,file,cb){
       return cb(null,"./uploads");
    },
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`);
    },
})
const upload=multer({storage});

app.get('/',(req,res)=>{
    return res.render("homepage");
});

app.post('/upload',upload.single("profileImage"),(req,res)=>{
    res.render("homepage");
});

app.listen(PORT,()=> console.log('Server started at PORT:8000'));

