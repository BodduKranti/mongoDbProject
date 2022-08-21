const mongoose = require('mongoose');

const DB = 'mongodb+srv://admin:admin$123@cluster0.fz30fzg.mongodb.net/mernproject?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected..')
})