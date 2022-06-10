const express =require('express')
const {getPosts, getSinglePost, updatePost, deletePost, createPost}=require('../controller/posts.js')
//post kısmına gelen tüm isteklerle burası ilgileniyor olacak
const router=express.Router();
//http://localhost:5000/posts
//GET POST DELETE UPDATE PATCH

router.get("/",getPosts); //url in sonuna  / koyar tüm postsları sıralar
//Yolu burda veriyoruz işlemi controller da yapıyoruz

router.get("/:id",getSinglePost);
router.post("/",createPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost)


module.exports=router;