const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    blogTitle: {
        type: String
    },
    blogCategory: {
        type: String
    },
    blogImg: {
        type: String
    },
    blogDesc: {
        type: String
    }
});

const ProductgSchema = new mongoose.Schema({
    productTitle: {
        type: String
    },
    productCategory: {
        type: String
    },
    productImg: {
        type: String
    },
    productPrice: {
        type: String
    },
    productDesc: {
        type: String
    }
});

const blogs = mongoose.model('blogs', blogSchema);
const Products = mongoose.model('Products', ProductgSchema);

module.exports = { blogs, Products };