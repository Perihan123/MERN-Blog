const Post = require("../models/post.js");

//Veri tabanımızdki bütün postlarımızı getiren function
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
//tek id ye göre post getirme
exports.getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id); //Veritabanında tutulma şekli
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//Yeni Post Oluşturma
exports.createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

//Postu Güncelleme
exports.updatePost=async(req,res)=>{
    const {id:_id}=req.params;
    const post=req.body;
    try{
        const updatedPost=await Post.findByIdAndUpdate(_id,post,{new:true});
        res.json(updatedPost);
    }
    catch(error){
        res.status(409).json({
            message:error.message,
        })
    }

}

//Postu Silme
exports.deletePost=async(req,res)=>{
    const {id:_id}=req.params;
    try{
        const deletePost=await Post.findByIdAndRemove(_id);
        res.json(deletePost);

    }
    catch(error){
        res.status(409).json({
            message:error.message
        })
    }
}