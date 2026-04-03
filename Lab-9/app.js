let express=require('express');
let bcrypt=require('bcrypt');   
let mongoose=require('mongoose');
let bodyParser=require('body-parser');
let app=express();
let Path=require('path');
let User=require('./model/user');
app.set('view engine','ejs');
app.set('views',Path.join(__dirname,'views'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/register',(req,res)=>{
    res.render('register');
});

mongoose.connect('mongodb://localhost:27017/3AB')
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:",err);
});


app.post('/register', (req,res)=>{
    let {username,password}=req.body;
    bcrypt.hash(password,10, (err,hash)=>{
        let U=new User({
            username:username,
            password:hash
        });
        U.save();
        console.log("User registered successfully");
    });
    res.send("User registered successfully");
});

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});