const Post = require("../models/Posts")

const createPost = (data) => {
    return Post.create(data);
}

const getAllPost = () => {
    return Post.find({is_active:true}).populate("author");
}

const getPostsByTag = (tags) => {
    return Post.find({tags:{$in:tags}, is_active:true}).populate("author");
}

const getPostsByCategory = (category) => {
    return Post.find({category:category, is_active:true}).populate("author");
}

const updatePostbyId = (id, data) => {
    return Post.findByIdAndUpdate(id,{$set: data}, {new:true})
}

const getPostById = (id) => {
	return Post.findOne({_id:id,is_active:true}).populate("author");
};

module.exports = {
    createPost,
    getAllPost,
    getPostsByCategory,
    getPostsByTag,
    updatePostbyId, 
    getPostById
}