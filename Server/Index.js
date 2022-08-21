//db username & password [admin , admin$123 ]
//db name [ mernproject ]
//db collection [ blogs ]

// install the dependencies

// 1. npm i express
// 2. npm i cors
// 3. npm i mongoose
// 4. npm i nodemon

//Import dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//database and routing import here
require('./Connection/Connection');
const blogRoutes = require('./Routes/Router');

app.use(cors());
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

const PORT = 8003;
app.listen(PORT,()=>{
    console.log(`This is running on PORT ${PORT}`);
})

//Routes 
app.use('/prodBlog', blogRoutes);