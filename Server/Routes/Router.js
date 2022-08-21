const router = require('express').Router();
const {blogs,Products} = require('../Model/ModelSchema');


router.post('/addblogs', async(req,res) => {
    const blogsItms = new blogs(req.body)
    try{
        await blogsItms.save()
        res.status(201).json({
            status: 'Success',
            data : {
                blogsItms
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
});


router.get('/getBlogs', async (req,res) => {
    const blogsItms = await blogs.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                blogsItms
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
});

router.get("/getBlogItm/:id",async(req,res)=>{
    try {
        // console.log(req.params);
        const {id} = req.params;

        const userindividual = await blogs.findById({_id:id});
        // console.log(userindividual);
        res.status(201).json(userindividual)

    } catch (error) {
        res.status(422).json(error);
    }
})

// update user data
router.patch("/updateBlog/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateBlogs = await blogs.findByIdAndUpdate(id,req.body,{
            new:true
        });

        // console.log(updateBlogs);
        res.status(201).json(updateBlogs);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete Blogs
router.delete("/deleteBlog/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deleteBlogs = await blogs.findByIdAndDelete({_id:id})
        // console.log(deleteBlogs);
        res.status(201).json(deleteBlogs);

    } catch (error) {
        res.status(422).json(error);
    }
})

// Product realted routings
router.post('/addProduct', async(req,res) => {
    const productItms = new Products(req.body)
    try{
        await productItms.save()
        res.status(201).json({
            status: 'Success',
            data : {
                productItms
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
});


//get Products router
router.get('/getProducts', async (req,res) => {
    const productItms = await Products.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                productItms
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
});

//get products by id
router.get("/getProductItm/:id",async(req,res)=>{
    try {
        // console.log(req.params);
        const {id} = req.params;

        const productIndivisual = await Products.findById({_id:id});
        // console.log(productIndivisual);
        res.status(201).json(productIndivisual)

    } catch (error) {
        res.status(422).json(error);
    }
})

module.exports = router;